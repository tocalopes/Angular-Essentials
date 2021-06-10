import { catchError, map } from 'rxjs/operators';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar'
import { EMPTY, Observable } from 'rxjs';
import { Product, ProductType } from './product.model';
import { THIS_EXPR } from '@angular/compiler/src/output/output_ast';

//pode ser injetada em outras classes
@Injectable({
  providedIn: 'root'
})

export class ProductService {

  baseUrl = 'http://localhost:3000/products';

  constructor(private snackBar: MatSnackBar, private http: HttpClient) { }

  showMessage(msg: string,isError : boolean = false): void {
    this.snackBar.open(msg, 'X', {
      duration: 3000,
      horizontalPosition: 'right',
      verticalPosition: 'top',
      panelClass : isError ? ['msg-error'] : ['msg-success']
    })
  }

  producTypeToString(type : ProductType) : string {
    if(type == ProductType.UBER){
      return 'UBER';
    }
    if(type == ProductType.FOOD){
      return 'COMIDA';
    }
    if(type == ProductType.FIXED_BILLS){
      return 'CONTAS FIXAS';
    }
    if(type == ProductType.SHOPPING){
      return 'COMPRAS';
    }
    return '';
  }

  
  create(product: Product): Observable<Product> {
    return this.http.post<Product>(this.baseUrl, product).pipe(
      map(obj => obj),catchError(e => this.erroHandler(e))
    );
  }

  erroHandler(e : any):Observable<any>{
    this.showMessage('Ocorreu um erro',true);
    return EMPTY;
  }

  read(): Observable<Product[]> {
    return this.http.get<Product[]>(this.baseUrl).pipe(
      map(obj => obj),catchError(e => this.erroHandler(e))
    );
  }

  readById(id: string): Observable<Product> {
    const url = `${this.baseUrl}/${id}`
    return this.http.get<Product>(url).pipe(
      map(obj => obj),catchError(e => this.erroHandler(e))
    );
  }

  update(product: Product): Observable<Product> {
    const url = `${this.baseUrl}/${product.id}`
    return this.http.put<Product>(url, product).pipe(
      map(obj => obj),catchError(e => this.erroHandler(e))
    );
  }

  delete(id: string): Observable<Product> {
    return this.http.delete<Product>(`${this.baseUrl}/${id}`).pipe(
      map(obj => obj),catchError(e => this.erroHandler(e))
    );
  }

}
