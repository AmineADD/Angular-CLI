import { Component } from '@angular/core';

@Component({
  selector: 'linksNavBar',
  templateUrl: '../View/nav-bar.component.html',
  styleUrls: ['../View/styles/nav-bar.component.css']
})
export class NavBarComponent {
  links = [{ name: "My Shop", url: "/myshop" }, { name: "Cart", url: "/cart" }, { name: "Profil", url: "/profil" }]
}
