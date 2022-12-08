function ProductService() {
  this.getListProductAPI = function () {
    var promise = axios({
      url: "https://6380c31c8efcfcedac0e45c1.mockapi.io/api/Product",
      method: "GET",
    });
    /**
     * Promise
     * - pending
     * - resolve
     * - reject
     */
    return promise;

  };
}