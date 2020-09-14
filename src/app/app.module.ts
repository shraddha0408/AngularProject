import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { FormsModule,ReactiveFormsModule } from '@angular/forms';
import { CarouselModule } from 'ngx-owl-carousel-o';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ComponantComponent } from './componant/componant.component';
import { SharedComponent } from './componant/shared/shared.component';
import { HeaderComponent } from './componant/shared/header/header.component';
import { NavComponent } from './componant/shared/nav/nav.component';
import { FooterComponent } from './componant/shared/footer/footer.component';
import { ShoppingComponent } from './componant/shopping/shopping.component';
import { CartComponent } from './componant/shopping/cart/cart.component';
import { FilterComponent } from './componant/shopping/filter/filter.component';
import { ProductComponent } from './componant/shopping/product/product.component';
import { CartItemComponent } from './componant/shopping/cart/cart-item/cart-item.component';
import { Prod8uctItemComponent } from './componant/shopping/product/prod8uct-item/prod8uct-item.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './componant/login/login.component';
import { RegisterComponent } from './componant/register/register.component';
import { ViewComponent } from './view/view.component';
import { HttpClientModule } from '@angular/common/http';
import { CheckoutComponent } from './checkout/checkout.component';
import { PaymentComponent } from './payment/payment.component';
import { ThanksComponent } from './thanks/thanks.component';
import { MarqueeComponent } from './componant/marquee/marquee.component';


@NgModule({
  declarations: [
    AppComponent,
    ComponantComponent,
    SharedComponent,
    HeaderComponent,
    NavComponent,
    FooterComponent,
    ShoppingComponent,
    CartComponent,
    FilterComponent,
    ProductComponent,
    CartItemComponent,
    Prod8uctItemComponent,
    HomeComponent,
    LoginComponent,
    RegisterComponent,
    ViewComponent,
    CheckoutComponent,
    PaymentComponent,
    ThanksComponent,
    MarqueeComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    CarouselModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
