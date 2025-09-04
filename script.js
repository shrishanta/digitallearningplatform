o// Basic JavaScript for Digital Learning Nabha website

// Add event listeners to buttons
document.addEventListener('DOMContentLoaded', function() {
  // Get Started button
  const getStartedBtn = document.querySelector('.btn.primary');
  if (getStartedBtn) {
    getStartedBtn.addEventListener('click', function() {
      alert('Welcome! Let\'s get started with Digital Learning Nabha.');
    });
  }



  // Explore Courses button
  const exploreCoursesBtn = document.querySelector('.btn.success');
  if (exploreCoursesBtn) {
    exploreCoursesBtn.addEventListener('click', function() {
      // Scroll to courses section
      const coursesSection = document.getElementById('courses');
      if (coursesSection) {
        coursesSection.scrollIntoView({ behavior: 'smooth' });
      }
    });
  }

  // Learn More button
  const learnMoreBtn = document.querySelector('.btn.outline');
  if (learnMoreBtn) {
    learnMoreBtn.addEventListener('click', function() {
      alert('Learn more about our mission to empower rural students.');
    });
  }

  // Sign In button
  const signinBtn = document.getElementById('signinBtn');
  if (signinBtn) {
    signinBtn.addEventListener('click', function() {
      window.location.href = 'signin.html';
    });
  }

  // Header Sign In button
  const headerSigninBtn = document.getElementById('headerSigninBtn');
  if (headerSigninBtn) {
    headerSigninBtn.addEventListener('click', function() {
      window.location.href = 'signin.html';
    });
  }

  // About button
  const aboutBtn = document.getElementById('aboutBtn');
  if (aboutBtn) {
    aboutBtn.addEventListener('click', function() {
      showAboutModal();
    });
  }

  // Smooth scrolling for navigation links
  const navLinks = document.querySelectorAll('nav a');
  navLinks.forEach(link => {
    link.addEventListener('click', function(e) {
      e.preventDefault();
      const targetId = this.getAttribute('href').substring(1);
      const targetSection = document.getElementById(targetId);
      if (targetSection) {
        targetSection.scrollIntoView({ behavior: 'smooth' });
      }
    });
  });

  // Close modal when clicking the close button
  const closeBtn = document.querySelector('.close');
  if (closeBtn) {
    closeBtn.addEventListener('click', closeMathModal);
  }

  // Close modal when clicking outside
  window.addEventListener('click', function(event) {
    const modal = document.getElementById('mathModal');
    if (event.target === modal) {
      closeMathModal();
    }
  });

  console.log('Digital Learning Nabha website loaded successfully!');

  // Video selection and playback logic
  const videoThumbnails = document.querySelectorAll('.video-thumbnail');
  const videoThumbnailList = document.getElementById('videoThumbnailList');
  const videoPlayerSection = document.getElementById('videoPlayerSection');
  const videoPlayer = document.getElementById('videoPlayer');
  const backToThumbnailsBtn = document.getElementById('backToThumbnailsBtn');
  const backToNotesBtn = document.getElementById('backToNotesBtn');

  videoThumbnails.forEach(thumbnail => {
    thumbnail.addEventListener('click', () => {
      const videoId = thumbnail.getAttribute('data-video-id');
      videoPlayer.src = `https://www.youtube.com/embed/${videoId}?autoplay=1&rel=0`;
      videoThumbnailList.style.display = 'none';
      videoPlayerSection.style.display = 'block';
    });
  });

  backToThumbnailsBtn.addEventListener('click', () => {
    videoPlayer.src = '';
    videoPlayerSection.style.display = 'none';
    videoThumbnailList.style.display = 'grid';
  });

  backToNotesBtn.addEventListener('click', () => {
    closeMathModal();
  });



  // Science modal event listeners
  const scienceCloseBtn = document.querySelector('#scienceModal .close');
  if (scienceCloseBtn) {
    scienceCloseBtn.addEventListener('click', closeScienceModal);
  }

  // Close Science modal when clicking outside
  window.addEventListener('click', function(event) {
    const scienceModal = document.getElementById('scienceModal');
    if (event.target === scienceModal) {
      closeScienceModal();
    }
  });

  // Science video selection and playback logic
  const scienceVideoThumbnails = document.querySelectorAll('.science-video-thumbnail');
  const scienceVideoThumbnailList = document.getElementById('scienceVideoThumbnailList');
  const scienceVideoPlayerSection = document.getElementById('scienceVideoPlayerSection');
  const scienceVideoPlayer = document.getElementById('scienceVideoPlayer');
  const scienceBackToThumbnailsBtn = document.getElementById('scienceBackToThumbnailsBtn');
  const scienceBackToNotesBtn = document.getElementById('scienceBackToNotesBtn');

  scienceVideoThumbnails.forEach(thumbnail => {
    thumbnail.addEventListener('click', () => {
      const videoId = thumbnail.getAttribute('data-video-id');
      scienceVideoPlayer.src = `https://www.youtube.com/embed/${videoId}?autoplay=1&rel=0`;
      scienceVideoThumbnailList.style.display = 'none';
      scienceVideoPlayerSection.style.display = 'block';
    });
  });

  scienceBackToThumbnailsBtn.addEventListener('click', () => {
    scienceVideoPlayer.src = '';
    scienceVideoPlayerSection.style.display = 'none';
    scienceVideoThumbnailList.style.display = 'grid';
  });

  scienceBackToNotesBtn.addEventListener('click', () => {
    closeScienceModal();
  });



  // Add interaction to "Start Learning Now" button in Science modal to show YouTube videos
  const scienceStartLearningBtnNew = document.getElementById('scienceStartLearningBtn');
  if (scienceStartLearningBtnNew) {
    scienceStartLearningBtnNew.addEventListener('click', () => {
      const scienceNotesSection = document.getElementById('scienceNotesSection');
      const scienceYoutubeVideosSection = document.getElementById('scienceYoutubeVideosSection');
      if (scienceNotesSection) {
        scienceNotesSection.style.display = 'none';
      }
      if (scienceYoutubeVideosSection) {
        scienceYoutubeVideosSection.style.display = 'block';
      }
    });
  }

  // English modal event listeners
  const englishCloseBtn = document.querySelector('#englishModal .close');
  if (englishCloseBtn) {
    englishCloseBtn.addEventListener('click', closeEnglishModal);
  }

  // Close English modal when clicking outside
  window.addEventListener('click', function(event) {
    const englishModal = document.getElementById('englishModal');
    if (event.target === englishModal) {
      closeEnglishModal();
    }
  });


  
  // Fix for english-grammar.html: add event listener to #startLearningBtn if present
  // Removed duplicate declaration of startLearningBtn to avoid redeclaration error
  const startLearningBtnFix = document.getElementById('startLearningBtn');
  if (startLearningBtnFix) {
    startLearningBtnFix.addEventListener('click', () => {
      const introContent = document.getElementById('introContent');
      const videoGrid = document.getElementById('videoGrid');
      if (introContent && videoGrid) {
        introContent.style.display = 'none';
        videoGrid.style.display = 'grid';
      }
    });
  }

  // Fix for index.html: Add event listener for Start Learning Now button in Math modal
  const mathStartLearningBtn = document.getElementById('startLearningBtn');
  if (mathStartLearningBtn) {
    mathStartLearningBtn.onclick = () => {
      const mathNotesSection = document.getElementById('mathNotesSection');
      const youtubeVideosSection = document.getElementById('youtubeVideosSection');
      if (mathNotesSection && youtubeVideosSection) {
        mathNotesSection.style.display = 'none';
        youtubeVideosSection.style.display = 'block';
      }
    };
  }

  // Fix for index.html: Add event listener for Start Learning Now button in English modal
  const englishStartLearningBtnFix = document.getElementById('englishStartLearningBtn');
  if (englishStartLearningBtnFix) {
    englishStartLearningBtnFix.onclick = () => {
      const englishNotesSection = document.getElementById('englishNotesSection');
      const englishVideosSection = document.getElementById('englishVideosSection');
      if (englishNotesSection && englishVideosSection) {
        englishNotesSection.style.display = 'none';
        englishVideosSection.style.display = 'block';
      }
    };
  }

  // English back to notes button
  const englishBackToNotesBtn = document.getElementById('englishBackToNotesBtn');
  if (englishBackToNotesBtn) {
    englishBackToNotesBtn.addEventListener('click', () => {
      document.getElementById('englishVideosSection').style.display = 'none';
      document.getElementById('englishNotesSection').style.display = 'block';
    });
  }

  // English video selection and playback logic
  const englishVideoThumbnails = document.querySelectorAll('.english-video-thumbnail');
  const englishVideoList = document.getElementById('englishVideoList');
  const englishVideoPlayerSection = document.getElementById('englishVideoPlayerSection');
  const englishVideoPlayer = document.getElementById('englishVideoPlayer');
  const englishBackToThumbnailsBtn = document.getElementById('englishBackToThumbnailsBtn');

  englishVideoThumbnails.forEach(thumbnail => {
    thumbnail.addEventListener('click', () => {
      const videoId = thumbnail.getAttribute('data-video-id');
      englishVideoPlayer.src = `https://www.youtube.com/embed/${videoId}?autoplay=1&rel=0`;
      englishVideoList.style.display = 'none';
      englishVideoPlayerSection.style.display = 'block';
    });
  });

  englishBackToThumbnailsBtn.addEventListener('click', () => {
    englishVideoPlayer.src = '';
    englishVideoPlayerSection.style.display = 'none';
    englishVideoList.style.display = 'grid';
  });

  // Quiz interaction logic
  const quizQuestions = [
    {
      question: "Q1. The unit of force is:",
      options: ["Watt", "Joule", "Newton", "Pascal"],
      answer: 2
    },
    {
      question: "Q2. Which of the following is a noun?",
      options: ["Run", "Happy", "Dog", "Quickly"],
      answer: 2
    },
    {
      question: "Q3. A farmer borrows ₹20,000 at 10% simple interest per year. What will he pay after 2 years?",
      options: ["₹22,000", "₹24,000", "₹26,000", "₹28,000"],
      answer: 1
    },
    {
      question: "Q4. The powerhouse of the cell is:",
      options: ["Nucleus", "Ribosome", "Mitochondria", "Chloroplast"],
      answer: 2
    },
    {
      question: "Q5. What is the opposite of the word 'big'?",
      options: ["Large", "Small", "Happy", "Sad"],
      answer: 1
    },
    {
      question: "Q6. The sum of the angles of a triangle is:",
      options: ["90°", "180°", "270°", "360°"],
      answer: 1
    },
    {
      question: "Q7. Plants prepare their food by:",
      options: ["Respiration", "Photosynthesis", "Transpiration", "Digestion"],
      answer: 1
    },
    {
      question: "Q8. The plural form of the word 'tooth' is:",
      options: ["Tooth", "Teeth", "Toothes", "Tooths"],
      answer: 1
    },
    {
      question: "Q9. A cow gives 5 litres of milk daily. How much milk will it give in 7 days?",
      options: ["25 litres", "30 litres", "35 litres", "40 litres"],
      answer: 2
    },
    {
      question: "Q10. Which gas is used in photosynthesis?",
      options: ["Oxygen", "Carbon dioxide", "Nitrogen", "Hydrogen"],
      answer: 1
    },
    {
      question: "Q11. Which of the following is an adverb?",
      options: ["Happy", "Quickly", "Dog", "Run"],
      answer: 1
    },
    {
      question: "Q12. The hardest natural substance on Earth is:",
      options: ["Iron", "Diamond", "Graphite", "Quartz"],
      answer: 1
    },
    {
      question: "Q13. The diagonals of a rectangle:",
      options: ["Are unequal", "Are equal", "Bisect each other at right angles", "Do not bisect each other"],
      answer: 1
    },
    {
      question: "Q14. A bag of rice costs ₹1,200. What is the cost of 5 such bags?",
      options: ["₹4,800", "₹5,200", "₹6,000", "₹6,200"],
      answer: 2
    },
    {
      question: "Q15. What is the past tense of the verb 'go'?",
      options: ["Go", "Goes", "Went", "Going"],
      answer: 2
    }
  ];

  let currentQuestion = 0;
  let score = 0;

  const startQuizBtn = document.getElementById('startQuizBtn');
  const quizStartSection = document.getElementById('quizStartSection');
  const quizQuestionsSection = document.getElementById('quizQuestionsSection');

  function showQuestion(index) {
    if (index >= quizQuestions.length) {
      quizQuestionsSection.innerHTML = `
        <h3>Your Score: ${score} / ${quizQuestions.length}</h3>
        <button onclick="location.reload()">Restart Quiz</button>
      `;
      return;
    }
    const q = quizQuestions[index];
    quizQuestionsSection.innerHTML = `
      <h3>Quiz Questions</h3>
      <div class="quiz-question">
        <p>${q.question}</p>
        ${q.options.map((opt, i) => `<button class="quiz-option" data-index="${i}">${opt}</button>`).join('')}
      </div>
    `;
    document.querySelectorAll('.quiz-option').forEach(btn => {
      btn.onclick = function() {
        if (parseInt(btn.dataset.index) === q.answer) {
          score++;
          btn.style.background = "#4caf50";
        } else {
          btn.style.background = "#f44336";
        }
        setTimeout(() => {
          currentQuestion++;
          showQuestion(currentQuestion);
        }, 700);
      };
    });
  }

  if (startQuizBtn && quizStartSection && quizQuestionsSection) {
    startQuizBtn.addEventListener('click', function() {
      quizStartSection.style.display = 'none';
      quizQuestionsSection.style.display = 'block';
      showQuestion(currentQuestion);
    });
  }

  // Science Quiz interaction logic
  const scienceQuizQuestions = [
    {
      question: "The chemical formula of common salt is:",
      options: ["NaCl", "KCl", "NaOH", "HCl"],
      answer: 0
    },
    {
      question: "The gas used in photosynthesis is:",
      options: ["Oxygen", "Carbon dioxide", "Nitrogen", "Hydrogen"],
      answer: 1
    },
    {
      question: "The unit of force is:",
      options: ["Watt", "Joule", "Newton", "Pascal"],
      answer: 2
    }
  ];

  let currentScienceQuestion = 0;
  let scienceScore = 0;

  const scienceTakeTestBtn = document.getElementById('scienceTakeTestBtn');
  const scienceTestSection = document.getElementById('scienceTestSection');
  const scienceTestQuestions = document.getElementById('scienceTestQuestions');
  const scienceSubmitTestBtn = document.getElementById('scienceSubmitTestBtn');
  const scienceTestResult = document.getElementById('scienceTestResult');
  const scienceTakeTestCloseBtn = document.getElementById('scienceTakeTestCloseBtn');

  function showScienceQuestion(index) {
    if (index >= scienceQuizQuestions.length) {
      scienceTestResult.innerHTML = `<h3>Your Score: ${scienceScore} / ${scienceQuizQuestions.length}</h3>`;
      scienceSubmitTestBtn.style.display = 'none';
      return;
    }
    const q = scienceQuizQuestions[index];
    scienceTestQuestions.innerHTML = `
      <div class="quiz-question">
        <p>${q.question}</p>
        ${q.options.map((opt, i) => `<button class="quiz-option" data-index="${i}">${opt}</button>`).join('')}
      </div>
    `;
    document.querySelectorAll('#scienceTestQuestions .quiz-option').forEach(btn => {
      btn.onclick = function() {
        if (parseInt(btn.dataset.index) === q.answer) {
          scienceScore++;
          btn.style.background = "#4caf50";
        } else {
          btn.style.background = "#f44336";
        }
        setTimeout(() => {
          currentScienceQuestion++;
          showScienceQuestion(currentScienceQuestion);
        }, 700);
      };
    });
  }

  if (scienceTakeTestBtn) {
    scienceTakeTestBtn.addEventListener('click', function() {
      showScienceModal();
      scienceTestSection.style.display = 'block';
      scienceTakeTestCloseBtn.style.display = 'inline-block';
      currentScienceQuestion = 0;
      scienceScore = 0;
      scienceTestResult.innerHTML = '';
      scienceSubmitTestBtn.style.display = 'block';
      showScienceQuestion(currentScienceQuestion);
    });
  }

  if (scienceTakeTestCloseBtn) {
    scienceTakeTestCloseBtn.addEventListener('click', function() {
      scienceTestSection.style.display = 'none';
      scienceTakeTestCloseBtn.style.display = 'none';
    });
  }

  if (scienceSubmitTestBtn) {
    scienceSubmitTestBtn.addEventListener('click', function() {
      // Force finish the quiz
      currentScienceQuestion = scienceQuizQuestions.length;
      showScienceQuestion(currentScienceQuestion);
    });
  }

  // Quiz modal event listeners
  const quizCloseBtn = document.querySelector('#quizModal .close');
  if (quizCloseBtn) {
    quizCloseBtn.addEventListener('click', closeQuizModal);
  }

  // Close Quiz modal when clicking outside
  window.addEventListener('click', function(event) {
    const quizModal = document.getElementById('quizModal');
    if (event.target === quizModal) {
      closeQuizModal();
    }
  });

  document.querySelector('a[href="create-profile.html"]').addEventListener('click', function(e) {
    e.preventDefault();
    document.getElementById('createProfilePage').style.display = 'block';
  });
});

// Modal functions
function showMathModal() {
  document.getElementById('mathModal').style.display = 'flex';
  document.getElementById('mathNotesSection').style.display = 'block';
  document.getElementById('youtubeVideosSection').style.display = 'none';

  // Setup video thumbnail click events
  const videoThumbnails = document.querySelectorAll('.video-thumbnail');
  const videoThumbnailList = document.getElementById('videoThumbnailList');
  const videoPlayerSection = document.getElementById('videoPlayerSection');
  const videoPlayer = document.getElementById('videoPlayer');
  const backToThumbnailsBtn = document.getElementById('backToThumbnailsBtn');
  const backToNotesBtn = document.getElementById('backToNotesBtn');

  videoThumbnails.forEach(thumbnail => {
    thumbnail.onclick = () => {
      const videoId = thumbnail.getAttribute('data-video-id');
      videoPlayer.src = `https://www.youtube.com/embed/${videoId}?autoplay=1&rel=0`;
      videoThumbnailList.style.display = 'none';
      videoPlayerSection.style.display = 'block';
    };
  });

  if (backToThumbnailsBtn) {
    backToThumbnailsBtn.onclick = () => {
      videoPlayer.src = '';
      videoPlayerSection.style.display = 'none';
      videoThumbnailList.style.display = 'grid';
    };
  }

  if (backToNotesBtn) {
    backToNotesBtn.onclick = () => {
      closeMathModal();
    };
  }
}

function closeMathModal() {
  document.getElementById('mathModal').style.display = 'none';
}

// Science modal functions
function showScienceModal() {
  document.getElementById('scienceModal').style.display = 'flex';
  // Show notes section and hide videos section initially
  document.getElementById('scienceNotesSection').style.display = 'block';
  document.getElementById('scienceYoutubeVideosSection').style.display = 'none';
}

function closeScienceModal() {
  document.getElementById('scienceModal').style.display = 'none';
}

// English modal functions
function showEnglishModal() {
  document.getElementById('englishModal').style.display = 'flex';
  // Show notes section and hide videos section initially
  document.getElementById('englishNotesSection').style.display = 'block';
  document.getElementById('englishVideosSection').style.display = 'none';
}

function closeEnglishModal() {
  document.getElementById('englishModal').style.display = 'none';
}

// Quiz modal functions
function showQuizModal() {
  document.getElementById('quizModal').style.display = 'flex';
  // Reset quiz state
  currentQuestion = 0;
  score = 0;
  document.getElementById('quizStartSection').style.display = 'block';
  document.getElementById('quizQuestionsSection').style.display = 'none';
}

function closeQuizModal() {
  document.getElementById('quizModal').style.display = 'none';
}

// About modal functions
function showAboutModal() {
  document.getElementById('aboutModal').style.display = 'flex';
}

function closeAboutModal() {
  document.getElementById('aboutModal').style.display = 'none';
}

// About modal event listeners
const aboutCloseBtn = document.querySelector('#aboutModal .close');
if (aboutCloseBtn) {
  aboutCloseBtn.addEventListener('click', closeAboutModal);
}

// Close About modal when clicking outside
window.addEventListener('click', function(event) {
  const aboutModal = document.getElementById('aboutModal');
  if (event.target === aboutModal) {
    closeAboutModal();
  }
});


