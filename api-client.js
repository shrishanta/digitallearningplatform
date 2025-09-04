// API Client for Digital Learning Nabha
const API_BASE_URL = 'http://localhost:5000/api';

class ApiClient {
  constructor() {
    this.token = localStorage.getItem('token');
  }

  setToken(token) {
    this.token = token;
    localStorage.setItem('token', token);
  }

  getToken() {
    return this.token;
  }

  clearToken() {
    this.token = null;
    localStorage.removeItem('token');
  }

  async request(endpoint, options = {}) {
    const url = `${API_BASE_URL}${endpoint}`;
    const config = {
      headers: {
        'Content-Type': 'application/json',
        ...options.headers,
      },
      ...options,
    };

    if (this.token) {
      config.headers.Authorization = `Bearer ${this.token}`;
    }

    try {
      const response = await fetch(url, config);
      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.message || 'API request failed');
      }

      return data;
    } catch (error) {
      console.error('API request error:', error);
      throw error;
    }
  }

  // Authentication methods
  async register(userData) {
    // Convert 'name' to 'username' for backend compatibility
    const registerData = {
      username: userData.name || userData.username,
      email: userData.email,
      password: userData.password
    };

    const response = await this.request('/auth/register', {
      method: 'POST',
      body: JSON.stringify(registerData),
    });
    if (response.token) {
      this.setToken(response.token);
    }
    return response;
  }

  async login(credentials) {
    const response = await this.request('/auth/login', {
      method: 'POST',
      body: JSON.stringify(credentials),
    });
    if (response.token) {
      this.setToken(response.token);
    }
    return response;
  }

  logout() {
    this.clearToken();
  }

  // Course methods
  async getCourses() {
    return this.request('/courses');
  }

  async getCourse(id) {
    return this.request(`/courses/${id}`);
  }

  // Quiz methods
  async getQuizzes() {
    return this.request('/quizzes');
  }

  async getQuiz(id) {
    return this.request(`/quizzes/${id}`);
  }

  async submitQuizResult(quizId, resultData) {
    return this.request(`/quizzes/${quizId}/results`, {
      method: 'POST',
      body: JSON.stringify(resultData),
    });
  }
}

// Create global instance
const apiClient = new ApiClient();

// Make it available globally
window.apiClient = apiClient;
