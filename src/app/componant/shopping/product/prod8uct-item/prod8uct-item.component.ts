import { Component, OnInit,Input} from '@angular/core';
import {Product} from 'src/app/models/product';
import {MessangerService} from 'src/app/services/messanger.service'

import { Router } from '@angular/router';

@Component({
  selector: 'app-prod8uct-item',
  templateUrl: './prod8uct-item.component.html',
  styleUrls: ['./prod8uct-item.component.css']
})
export class Prod8uctItemComponent implements OnInit {

  @Input() productItem: Product


  constructor(private msg: MessangerService,private rout:Router) { }

  ngOnInit(): void {
  }
  handleAddToCart() {
    this.msg.sendMsg(this.productItem)
    window.alert('Your product has been added to the cart!');
  

    
  }

}
