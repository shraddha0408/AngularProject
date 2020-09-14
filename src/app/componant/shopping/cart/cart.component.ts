import { Component, OnInit } from '@angular/core';
import {Product} from 'src/app/models/product';
import {MessangerService} from 'src/app/services/messanger.service';
import { Router, NavigationEnd } from '@angular/router';


@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {
  cartItems = [
     //{ id: 1, proudctId: 1, productName: 'Test 1', qty: 4, price: 100 },

  ];
  cartTotal = 0


  constructor(private msg:MessangerService) { }

  ngOnInit(){
  
    this.msg.getMsg().subscribe((product: Product) => {
      this.addProductToCart(product)
    
    })
  }
 
  addProductToCart(product: Product) {

    let productExists = false

    for (let i in this.cartItems) {
      if (this.cartItems[i].productId === product.id) {
        this.cartItems[i].qty++
        productExists = true
        break;
      }
    }

    if (!productExists) {
      this.cartItems.push({
        productId: product.id,
        productName: product.name,
        qty: 1,
        price: product.price
      })
    }
   
    this.cartTotal = 0
    this.cartItems.forEach(item => {
      this.cartTotal += (item.qty * item.price)
    })
  }

}
