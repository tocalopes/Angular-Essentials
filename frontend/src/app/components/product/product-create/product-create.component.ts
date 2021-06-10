import { Router } from '@angular/router';
import { ProductService } from './../product.service';
import { Component, OnInit } from '@angular/core';
import { Product, ProductType } from '../product.model';


interface ProductTypeView {
  value : number,
  viewValue : string
}

@Component(({
  selector: 'app-product-create',
  templateUrl: './product-create.component.html',
  styleUrls: ['./product-create.component.css']
}))

export class ProductCreateComponent implements OnInit {

  constructor(private productService:ProductService, private router:Router) { }

  product: Product = {
    name: '',
    price: null,
    productType :null,
  }


  types: ProductTypeView[] = [
    {value: ProductType.UBER.valueOf(), viewValue: 'UBER'},
    {value: ProductType.FOOD.valueOf(), viewValue: 'COMIDA'},
    {value: ProductType.FIXED_BILLS.valueOf(), viewValue: 'CONTAS'},
    {value: ProductType.SHOPPING.valueOf(), viewValue: 'COMPRAS'},
  ];

  selectedValue : ProductType;

  getProductTypeName (productType : ProductType) : string {
    return this.productService.producTypeToString(productType);
  }
  ngOnInit(): void {
    
  }

  createProduct(): void {
    console.log(typeof(this.product.price))
    this.productService.create(this.product).subscribe(
      () => {
        this.productService.showMessage("Produto criado");
        this.router.navigate(['/products'])
      } 
    );
    
  }

  cancel(): void {
    this.router.navigate(['/products'])
  }


}
