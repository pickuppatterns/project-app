
export default {
  getAll() {
    return fetch('api/restaurants/')
      .then(response => response.json());
  }
};