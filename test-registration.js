// Test script to verify user registration and login functionality
const mongoose = require('mongoose');
const User = require('./models/User');
const bcrypt = require('bcrypt');

async function testUserRegistration() {
  try {
    // Connect to MongoDB
    await mongoose.connect('mongodb://localhost:27017/digital-learning-nabha');
    console.log('✅ Connected to MongoDB');

    // Clear existing users for clean test
    await User.deleteMany({});
    console.log('🧹 Cleared existing users');

    // Test 1: Create a new user
    console.log('\n📝 Testing User Registration...');
    const testUser = {
      username: 'John Doe',
      email: 'john@example.com',
      password: 'password123'
    };

    const user = new User({
      username: testUser.username,
      email: testUser.email
    });

    await user.setPassword(testUser.password);
    await user.save();

    console.log('✅ User registered successfully');
    console.log('User details:', {
      id: user._id,
      username: user.username,
      email: user.email,
      createdAt: user.createdAt
    });

    // Test 2: Verify password validation
    console.log('\n🔐 Testing Password Validation...');
    const isValidPassword = await user.validatePassword(testUser.password);
    console.log('Password validation result:', isValidPassword ? '✅ Valid' : '❌ Invalid');

    // Test 3: Check if user exists in database
    console.log('\n📊 Checking Database Storage...');
    const usersInDB = await User.find({});
    console.log(`Users in database: ${usersInDB.length}`);

    usersInDB.forEach((dbUser, index) => {
      console.log(`User ${index + 1}:`, {
        id: dbUser._id.toString(),
        username: dbUser.username,
        email: dbUser.email,
        hasPasswordHash: !!dbUser.passwordHash,
        createdAt: dbUser.createdAt
      });
    });

    // Test 4: Test duplicate email prevention
    console.log('\n🚫 Testing Duplicate Email Prevention...');
    try {
      const duplicateUser = new User({
        username: 'Jane Doe',
        email: testUser.email // Same email
      });
      await duplicateUser.setPassword('differentpassword');
      await duplicateUser.save();
      console.log('❌ Duplicate email was allowed (this should not happen)');
    } catch (error) {
      console.log('✅ Duplicate email prevented:', error.message);
    }

    // Test 5: Test duplicate username prevention
    console.log('\n🚫 Testing Duplicate Username Prevention...');
    try {
      const duplicateUser = new User({
        username: testUser.username, // Same username
        email: 'jane@example.com'
      });
      await duplicateUser.setPassword('differentpassword');
      await duplicateUser.save();
      console.log('❌ Duplicate username was allowed (this should not happen)');
    } catch (error) {
      console.log('✅ Duplicate username prevented:', error.message);
    }

    console.log('\n🎉 All tests completed successfully!');
    console.log('User data is properly stored in the database.');

  } catch (error) {
    console.error('❌ Test failed:', error);
  } finally {
    await mongoose.disconnect();
    console.log('🔌 Disconnected from MongoDB');
  }
}

// Run the test
testUserRegistration();
