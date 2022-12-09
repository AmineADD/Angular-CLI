import { Component } from '@angular/core';
import { ProductsService } from '../Services/products.service';
import Cart from '../Services/types/Cart';

@Component({
  selector: 'cart',
  templateUrl: '../View/cart.component.html',
  styleUrls: ['../View/styles/cart.component.css']
})
export class CartComponent {

  cart: Cart[] = []
  totalToPay: number = 0;

  constructor(private _productsService: ProductsService) {
  }
  ngOnInit(): void {
    this.load();
  }

  addItem(indexOfProduct: number) {
    const getProduct = this.cart.find(({ index }) => index === indexOfProduct)?.product;
    if (getProduct) {
      this._productsService.saveNewItemOnStorage(getProduct);
      this.load();
    }
  }

  removeItem(indexOfProduct: number) {
    const getProduct = this.cart.find(({ index }) => index === indexOfProduct)?.product;
    if (getProduct) {
      this._productsService.removeItemOnStorage(getProduct);
      this.load();
    }
  }

  load() {
    this.cart = this._productsService.getCartFromStorage()
    this.totalToPay = this.cart.map((r) => r.quantity * r.product.specifications[0].price).reduce((a, b) => a + b)
  }
}
