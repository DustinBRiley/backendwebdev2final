import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from "./components/home/home.component";
import { ShopComponent } from "./components/shop/shop.component";
import { PagenotfoundComponent } from "./components/pagenotfound/pagenotfound.component";
import { CheckoutComponent } from "./components/checkout/checkout.component";
import { NgModule } from '@angular/core';

const routes: Routes = [
    {path:'', component: HomeComponent},
    {path:'home', component: HomeComponent},
    {path:'shop', component: ShopComponent},
    {path:'checkout', component: CheckoutComponent},
    {path:'**', component: PagenotfoundComponent }
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})

export class AppRoutingModule {}
