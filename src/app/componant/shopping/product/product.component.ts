import { Component, OnInit } from '@angular/core';
import{ProductService} from 'src/app/services/product.service';
import { Product } from 'src/app/models/product';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {

  productList:Product[] = []


  constructor(private productService: ProductService) { }

  ngOnInit(){
    this.productList = this.productService.getProducts()
  }

}
