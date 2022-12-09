import { Component, Input, Output } from '@angular/core';
import { ProductsService } from '../Services/products.service';
import { Product } from '../Services/types/Product';

@Component({
  selector: 'products',
  templateUrl: '../View/product.component.html',
  styleUrls: ['../View/Styles/product.component.css', '../View/Styles/shop.component.css']
})
export class ProductComponent {
  public products: Product[] = [];

  // comming from parent function
  @Input()
  onButtonHover: Function = () => null;

  @Output()
  nbOfSavedProducts: number = 0;

  constructor(private _productsService: ProductsService) {
  }


  ngOnInit(): void {
    this._productsService.getInitialData().subscribe(list => (this.products = list))
    this.nbOfSavedProducts = this._productsService.getCartFromStorage().length
  }

  @Output()
  onClick: Function = (index: number) => {
    this._productsService.saveNewItemOnStorage(this.products[index])
    this.nbOfSavedProducts = this.nbOfSavedProducts + 1;
  }

}
