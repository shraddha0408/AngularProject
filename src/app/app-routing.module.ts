import { NgModule, Component } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { CartComponent } from './componant/shopping/cart/cart.component';
import { ShoppingComponent } from './componant/shopping/shopping.component';
import { LoginComponent } from './componant/login/login.component';
import { RegisterComponent } from './componant/register/register.component';
import { ViewComponent } from './view/view.component';
import { CheckoutComponent } from './checkout/checkout.component';
import { PaymentComponent } from './payment/payment.component';
import { ThanksComponent } from './thanks/thanks.component';

const routes: Routes = [
   
  {
   path:'',
   redirectTo:'/shopping',
   pathMatch:'full'
  
  },

  {
    path:'shopping',
    component: ShoppingComponent 
  },

  
  {
    path:'login',
    component: LoginComponent 
  },
  {
    path:'register',
    component: RegisterComponent
  },

{
  path:'cart',
  component:CartComponent
},
{
  path:'view',
  component:ViewComponent
},
{
  path:'checkout',
  component:CheckoutComponent
},
{
  path:'payment',
  component:PaymentComponent
},
{
  path:'thanks',
  component:ThanksComponent
}

];

@NgModule({
  imports: [CommonModule,RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
