class Api {
  static BASE_API = process.env.REACT_APP_API_BASE_URL;

  static fetchFlavors() {
    return fetch(`${Api.BASE_API}/flavors`).then(
      resolve => resolve.json()
    );
  }

  static fetchSizes() {
    return fetch(`${Api.BASE_API}/sizes`).then(
      resolve => resolve.json()
    );
  }

  static fetchIncrements() {
    return fetch(`${Api.BASE_API}/increments`).then(
      resolve => resolve.json()
    );
  }

  static saveOrder(data) {
    return fetch(`${Api.BASE_API}/orders`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json; charset=utf-8' },
      body: JSON.stringify(data)
    }).then(resolve => resolve.json());
  }

  static fetchOrders() {
    return fetch(`${Api.BASE_API}/orders`).then(
      resolve => resolve.json()
    );
  }
}

export default Api;
