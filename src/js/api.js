import fetch from 'isomorphic-fetch';

const baseUrl= 'http://localhost:3000';

const api = {
  posts: {
    async getList() {
      const response = await fetch(`${baseUrl}`);
      const data = await response.json();
      return data;
    }
    }
};

export default api;
