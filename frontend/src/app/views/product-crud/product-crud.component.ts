import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router'
import { HeaderService } from 'src/app/components/template/header/header.service';

@Component({
  selector: 'app-product-crud',
  templateUrl: './product-crud.component.html',
  styleUrls: ['./product-crud.component.css']
})
export class ProductCrudComponent implements OnInit {

  ///Angular precisa injegar o router
  constructor(private router:Router,private headerService : HeaderService) {
    this.headerService.headerData = {
        title : 'Produtos',
        icon : 'store',
        routeUrl: '/products'
    }
   }

  ngOnInit(): void {

  }

  navigateToProductCreate(): void{
    this.router.navigate(['/products/create']);
  }

}
