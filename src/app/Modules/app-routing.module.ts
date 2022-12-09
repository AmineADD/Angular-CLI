import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from '../Components/app.component';
import { CartComponent } from '../Components/cart.component';
import { ProfilComponent } from '../Components/profil.component';
import { ShopComponent } from '../Components/shop.component';

const routes: Routes = [{ path: "cart", component: CartComponent }, { path: "profil", component: ProfilComponent }, { path: "**", component: ShopComponent }];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
