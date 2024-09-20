const axios = require('axios');

class SSAQuantAPI {
  constructor(baseURL) {
    this.client = axios.create({
      baseURL: baseURL || 'http://localhost:3000',
      headers: { 'Content-Type': 'application/json' }
    });
  }

  // Companies
  async createCompany(companyData) {
    try {
      const response = await this.client.post('/companies', { company: companyData });
      return response.data;
    } catch (error) {
      throw new Error(`Error creating company: ${error.message}`);
    }
  }

  async getCompanies() {
    try {
      const response = await this.client.get('/companies');
      return response.data;
    } catch (error) {
      throw new Error(`Error fetching companies: ${error.message}`);
    }
  }

  async getCompanyById(companyId) {
    try {
      const response = await this.client.get(`/companies/${companyId}`);
      return response.data;
    } catch (error) {
      throw new Error(`Error fetching company: ${error.message}`);
    }
  }

  // Users
  async createUser(userData) {
    try {
      const response = await this.client.post('/users', { user: userData });
      return response.data;
    } catch (error) {
      throw new Error(`Error creating user: ${error.message}`);
    }
  }

  async getUsers() {
    try {
      const response = await this.client.get('/users');
      return response.data;
    } catch (error) {
      throw new Error(`Error fetching users: ${error.message}`);
    }
  }

  async getUserById(userId) {
    try {
      const response = await this.client.get(`/users/${userId}`);
      return response.data;
    } catch (error) {
      throw new Error(`Error fetching user: ${error.message}`);
    }
  }

  // Portfolios
  async createPortfolio(portfolioData) {
    try {
      const response = await this.client.post('/portfolios', { portfolio: portfolioData });
      return response.data;
    } catch (error) {
      throw new Error(`Error creating portfolio: ${error.message}`);
    }
  }

  async getPortfolios() {
    try {
      const response = await this.client.get('/portfolios');
      return response.data;
    } catch (error) {
      throw new Error(`Error fetching portfolios: ${error.message}`);
    }
  }

  async getPortfolioById(portfolioId) {
    try {
      const response = await this.client.get(`/portfolios/${portfolioId}`);
      return response.data;
    } catch (error) {
      throw new Error(`Error fetching portfolio: ${error.message}`);
    }
  }

  // Transactions
  async createTransaction(transactionData) {
    try {
      const response = await this.client.post('/transactions', { transaction: transactionData });
      return response.data;
    } catch (error) {
      throw new Error(`Error creating transaction: ${error.message}`);
    }
  }

  async getTransactions() {
    try {
      const response = await this.client.get('/transactions');
      return response.data;
    } catch (error) {
      throw new Error(`Error fetching transactions: ${error.message}`);
    }
  }

  // Order Book
  async createOrder(orderData) {
    try {
      const response = await this.client.post('/order_books', { order_book: orderData });
      return response.data;
    } catch (error) {
      throw new Error(`Error creating order: ${error.message}`);
    }
  }

  async getOrderBooks() {
    try {
      const response = await this.client.get('/order_books');
      return response.data;
    } catch (error) {
      throw new Error(`Error fetching order books: ${error.message}`);
    }
  }
}

module.exports = SSAQuantAPI;
