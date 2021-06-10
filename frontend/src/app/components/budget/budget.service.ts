import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { catchError, map, retry } from 'rxjs/operators';
import { Budget } from "./budget.model";


import { EMPTY, Observable } from 'rxjs';
import { Product, ProductType } from './product.model';
import { THIS_EXPR } from '@angular/compiler/src/output/output_ast';
        //pode ser injetada em outras classes
@Injectable({
    providedIn: 'root'
})

export class BudgetService {
    [x: string]: any;


  
    private baseUrl = 'http://localhost:3000/budgets';

    constructor(private http : HttpClient){

    }


    get() : Observable<Budget[]> {
        return this.http.get<Budget[]>(this.baseUrl)
      }


}