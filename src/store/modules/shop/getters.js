export default {
  cartProducts(state) {
    return state.cart.items;
  },
  quantity(state) {
    return state.cart.qty;
  },
  totalSum(state) {
    return state.cart.total;
  },
  allProducts(state) {
    return state.products;
  },
};
