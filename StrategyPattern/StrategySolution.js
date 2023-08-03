class Product {
  constructor(name, unitPrice, quantity) {
    this.name = name;
    this.unitPrice = unitPrice;
    this.quantity = quantity;
  }
}

class Order {

  constructor(discountType) {
    this.discountType = discountType;
  }

  productList = [];
  discountStrategy = "no discount";

  addProduct(product) {
    this.productList.push(product);
  }

  getProductList() {
    return this.productList;
  }

  setDiscountStrategy(strategy) {
    this.discountStrategy = strategy;
  }

  checkOut() {
    let total = 0;
    let discount = 0;

    for (let product of this.productList) {
      total += product.unitPrice * product.quantity;
    }

    discount = this.discountType.getDiscountPrice(total);

    // if (this.discountStrategy == "no discount") {
    //   discount = 0;
    // } else if (this.discountStrategy == "standard discount") {
    //   discount = total * 0.1;
    // } else if (this.discountStrategy == "high value discount") {
    //   if (total > 1000) {
    //     discount = total * 0.2;
    //   } else {
    //     discount = total * 0.1;
    //   }
    // } else if (this.discountStrategy == "vip discount") {
    //   discount = total * 0.3;
    // }

    console.log("Order details");

    for (let product of this.productList) {
      console.log(
        `${product.name} ${product.unitPrice} ${product.quantity} ${
          product.unitPrice * product.quantity
        }`
      );
    }

    console.log(`Amount: ${total}`);
    console.log(`Discount: ${discount}`);
    console.log(`Net: ${total - discount}`);
  }
}

class NoDiscount {
  
  getDiscountPrice() {
    return this.discount;
  }
}

class StandardDiscount {
  
  getDiscountPrice(total) {
    return total * 0.2;
  }
}

class HighValueDiscount {

  getDiscountPrice(total) {
    return total > 1000 ? total * 0.2 : total * 0.1;
  }
}

class VIPDiscount {

  getDiscountPrice(total) {
    return total * 0.3;
  }
}
var order = new Order(new VIPDiscount);
order.addProduct(new Product("iPhone", 1_00_000, 1));
order.addProduct(new Product("AirPods", 30_000, 2));
order.addProduct(new Product("Macbook", 2_20_000, 1));
order.setDiscountStrategy("standard discount");
order.checkOut();
