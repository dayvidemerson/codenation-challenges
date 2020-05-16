class Cart {
  #products = [];

  constructor(products) {
    this.#products = products;
    this.#updatePrice();
  }

  get promotion() {
    return this.#isFullLook();
  }

  productsFormatted = () => {
    return this.#products.map((product) => {
      return {
        name: product.name,
        category: product.category,
      };
    });
  };

  #numberOfProductsByCategory = () => {
    return this.#products.reduce((result, product) => {
      result[product.category] = result[product.category] || 0;
      result[product.category]++;
      return result;
    }, {});
  };

  #categoryLength = () => {
    return Object.keys(this.#numberOfProductsByCategory()).length;
  };

  #isFullLook = () => {
    return this.#categoryLength() >= 4 ? "FULL LOOK" : this.#isTripleLook();
  };

  #isTripleLook = () => {
    return this.#categoryLength() == 3 ? "TRIPLE LOOK" : this.#isDoubleLook();
  };

  #isDoubleLook = () => {
    return this.#categoryLength() == 2 ? "DOUBLE LOOK" : this.#isSingleLook();
  };

  #isSingleLook = () => {
    return this.#categoryLength() == 1 ? "SINGLE LOOK" : "";
  };

  #updatePrice = () => {
    let details = this.#products.reduce(
      (result, product) => {
        const productPromotion = product.promotions.filter((promotionLook) =>
          promotionLook.looks.includes(this.promotion)
        );

        const price = productPromotion[0]
          ? productPromotion[0].price
          : product.regularPrice;

        const discountValue = product.regularPrice - price;

        result.totalPrice += price;
        result.totalRegularPrice += product.regularPrice;
        result.discountValue += discountValue;
        return result;
      },
      {
        totalPrice: 0,
        totalRegularPrice: 0,
        discountValue: 0,
      }
    );

    const percentageTotalPrice =
      (details.totalPrice / details.totalRegularPrice) * 100;

    this.totalPrice = details.totalPrice.toFixed(2);
    this.discountValue = details.discountValue.toFixed(2);
    this.discount = `${(100 - percentageTotalPrice).toFixed(2)}%`;
  };
}

function getShoppingCart(ids, productsList) {
  const productsFiltered = productsList.filter((product) =>
    ids.includes(product.id)
  );

  const cart = new Cart(productsFiltered);

  return {
    products: cart.productsFormatted(),
    promotion: cart.promotion,
    totalPrice: cart.totalPrice,
    discountValue: cart.discountValue,
    discount: cart.discount,
  };
}

module.exports = {
  getShoppingCart,
};
