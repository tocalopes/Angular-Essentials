import { ProductService } from './../product.service';
import { Component, OnInit } from '@angular/core';
import { Product } from '../product.model';
import { Router } from '@angular/router';

@Component({
  selector: 'app-product-read',
  templateUrl: './product-read.component.html',
  styleUrls: ['./product-read.component.css']
})
export class ProductReadComponent implements OnInit {

  //injeção de dependência é feita na declaração no construtor

  constructor(private service: ProductService, private router:Router) { }
  products : Product[];
  displayedColumns = ['id','name','price','action'];

  ngOnInit(): void {
    this.service.read().subscribe(products => {
      this.products = products;
      console.log(products);
    })
  }



}
