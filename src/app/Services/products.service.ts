import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import LOCAL_STORAGE_KEY from 'src/assets/constants/constant';
import { Cart } from './types/cart';
import { Product } from './types/Product';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {

  private _url: string = '/assets/data/products/products.json';
  constructor(private http: HttpClient) { }

  getInitialData(): Observable<Product[]> {
    return this.http.get<Product[]>(this._url)
  }

  getCartFromStorage(): Cart[] {
    const getCurrentCart = localStorage.getItem("cart");
    if (getCurrentCart) {
      return JSON.parse(getCurrentCart);
    }
    return []
  }

  saveNewItemOnStorage(item: Product) {
    let getCurrentCart = this.getCartFromStorage();
    getCurrentCart.length > 0 && this.productFoundInCart(item.index, getCurrentCart) ? getCurrentCart = getCurrentCart.map((oldItem) => {
      if (oldItem.index === item.index) {
        return {
          ...oldItem,
          quantity: oldItem.quantity + 1
        }
      }
      return oldItem;
    }) : getCurrentCart.push({ index: item.index, quantity: 1, product: item })
    this.save(getCurrentCart)
  }

  productFoundInCart(index: number, getCurrentCart: Cart[]): boolean {
    return getCurrentCart.findIndex((item) => item.index === index) !== -1
  }

  save(cart: Cart[]) {
    localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(cart));
  }
}
