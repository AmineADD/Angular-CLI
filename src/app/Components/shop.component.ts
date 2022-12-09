import { Component, Output } from '@angular/core';

@Component({
  selector: 'shop',
  templateUrl: '../View/shop.component.html',
  styleUrls: ['../View/styles/shop.component.css']
})
export class ShopComponent {
  @Output()
  title = "Welcome to my Shop !";

  @Output()
  titleClassName: "normal-title" | "focus-title" = "normal-title";


  get onItemButtonHover() {
    return this.changeTitleAndStyles.bind(this);
  }

  changeTitleAndStyles(isFocus: boolean) {
    isFocus ? (
      this.title = "lot of surprises are waiting for you",
      this.titleClassName = "focus-title"
    ) : (
      this.title = "Welcome to my Shop !",
      this.titleClassName = "normal-title"
    )
  }
}
