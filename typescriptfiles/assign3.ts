let Order = {
  id: 101,
  title: "java",
  price: 39.9,
  getOrder: function () {
    console.log("id=" + this.id);
    console.log("title=" + this.title);
    console.log("price=" + this.price);
  },
  getPrice: function () {
    console.log("price=" + this.price);
  }
};
let copy = Object.assign({}, Order);
copy.getOrder();
copy.getPrice();
