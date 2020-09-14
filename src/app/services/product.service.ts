import { Injectable } from '@angular/core';

import{Product} from '../models/product';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  products:Product[]=[
    new Product(1, 'vince-ace', 'Gunmetal Black Full Rim Square Vincent Chase Steel Escobar', 4300,"../../assets/r4.jpg"),
    new Product(2, 'Aqulens ', 'VC E13051 -C2 Smartphone/ PC Eyeglasses', 1750,"../../assets/7.jpg"),
    new Product(3, 'softlense', 'Golden Brown Grey Full Rim Square John Jacobs JJ Tints JJ S12962 - C1', 5200,"../../assets/r5.jpg"),
    new Product(4, 'Lconnect', 'Gunmetal Black Full Rim Square Vincent Chase Steel Escobar', 1200,"../../assets/6.jpg"),
    new Product(5, 'alkon', 'Gunmetal Black Full Rim Square Vincent Chase Steel Escobar', 4100,"../../assets/ol1.jpg"),
    new Product(6, 'Optics', 'VC E13051 -C2 Smartphone/ PC Eyeglasses', 1333,"../../assets/r7.jpg"),
    new Product(7, 'Focus', 'Golden Brown Grey Full Rim Square John Jacobs JJ Tints JJ S12962', 4555,"../../assets/8.jpg"),
    new Product(8, 'Acuvue', 'VC E13051 -C2 Smartphone/ P  C Eyeglasses', 3659,"../../assets/r9.jpg"),
    new Product(9, 'freshlook', 'Gunmetal Black Full Rim Square Vincent Chase Steel Escobar', 3948,"../../assets/9.jpg"),
    new Product(4, 'Lconnect', 'Gunmetal Black Full Rim Square Vincent Chase Steel Escobar', 1200,"../../assets/6.jpg"),
    new Product(5, 'alkon', 'Gunmetal Black Full Rim Square Vincent Chase Steel Escobar', 4100,"../../assets/ol1.jpg"),
    new Product(6, 'Optics', 'VC E13051 -C2 Smartphone/ PC Eyeglasses', 1333,"../../assets/r7.jpg"),
  ]

  constructor() { }
  getProducts(): Product[] {
    
    return this.products
  }
}
