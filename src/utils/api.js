class Api {
  static BASE_API = process.env.REACT_APP_API_BASE_URL;

  static fetchPizzaFlavors() {
    return fetch(`${Api.BASE_API}/pizza-flavors`).then(
      resolve => resolve.json()
    );
  }

  static fetchPizzaSizes() {
    return fetch(`${Api.BASE_API}/pizza-sizes`).then(
      resolve => resolve.json()
    );
  }
}

export default Api;
