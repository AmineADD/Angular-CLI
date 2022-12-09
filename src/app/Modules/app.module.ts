import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from '../Components/app.component';
import { NavBarComponent } from '../Components/nav-bar.component';
import { CartComponent } from '../Components/cart.component';
import { ProfilComponent } from '../Components/profil.component';
import { ShopComponent } from '../Components/shop.component';
import { LinksService } from '../Services/links.service';

@NgModule({
  declarations: [
    AppComponent,
    NavBarComponent,
    CartComponent,
    ProfilComponent,
    ShopComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [LinksService],
  bootstrap: [AppComponent]
})
export class AppModule { }
