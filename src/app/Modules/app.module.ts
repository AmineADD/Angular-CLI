import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from '../Components/app.component';
import { CartComponent } from '../Components/cart.component';
import { ProfilComponent } from '../Components/profil.component';
import { ShopComponent } from '../Components/shop.component';
import { LinksService } from '../Services/links.service';
import { ProductComponent } from '../Components/product.component';
import { NavBarComponent } from '../Components/nav-bar.component';
import { ProductsService } from '../Services/products.service';

@NgModule({
  declarations: [
    AppComponent,
    NavBarComponent,
    CartComponent,
    ProfilComponent,
    ShopComponent,
    ProductComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [LinksService, ProductsService],
  bootstrap: [AppComponent]
})
export class AppModule { }
