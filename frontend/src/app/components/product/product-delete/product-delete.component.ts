import { ActivatedRoute, Router } from '@angular/router';
import { ProductService } from './../product.service';
import { Component, OnInit, LOCALE_ID } from '@angular/core';
import { Product } from '../product.model';

@Component({
  selector: 'app-product-delete',
  templateUrl: './product-delete.component.html',
  styleUrls: ['./product-delete.component.css']
})

export class ProductDeleteComponent implements OnInit {

  product: Product;

  constructor(private service: ProductService, private route: ActivatedRoute, private router: Router) { }

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id')
    this.service.readById(id).subscribe(
      (product) => {
        this.product = product
      }
    );
  }

  deleteProduct(): void {
    this.service.delete(this.product.id.toString()).subscribe(
      product => {
        this.service.showMessage(`Produto ${product.name} excluido`);
        this.router.navigate(['/products'])
      }
    );

  }

  cancel(): void {
    this.router.navigate(['/products'])
  }
}
