import { Product } from './../product.model';
import { ProductService } from './../product.service';
import { Component, OnInit, ɵConsole } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-product-read',
  templateUrl: './product-read.component.html',
  styleUrls: ['./product-read.component.css']
})

export class ProductReadComponent implements OnInit {

  //injeção de dependência é feita na declaração no construtor

  products: Product[];
  total: number;

  constructor(private service: ProductService, private router: Router) {

  }

  displayedColumns = ['id', 'name', 'price', 'productType', 'action'];

  ngOnInit(): void {
    this.service.read().subscribe(products => {
      this.products = products;
      var result : number = 0;
      
      for(var p of this.products){
        result = result + p.price;
      }
      console.log("testando 123 =>" + result)
      this.total = result
      console.log(products.map(product => product.price).reduce((acc,p) => acc + p));
    })
  }

  typeString(typeId: number): string {
    return this.service.producTypeToString(typeId);
  }


}
