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

  static saveOrder(data) {
    return fetch(`${Api.BASE_API}/currentOrder`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json; charset=utf-8' },
      body: JSON.stringify(data)
    }).then(resolve => resolve.json());
  }

  static fetchCurrentOrder() {
    return fetch(`${Api.BASE_API}/currentOrder`).then(
      resolve => resolve.json()
    );
  }
}

export default Api;
