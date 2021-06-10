import { Component, OnInit } from '@angular/core';
import { Budget } from '../budget.model';
import { BudgetService } from '../budget.service';

@Component({
  selector: 'app-budget-read',
  templateUrl: './budget-read.component.html',
  styleUrls: ['./budget-read.component.css']
})
export class BudgetReadComponent implements OnInit {

  constructor(private budgetService: BudgetService) { }
  budget: Budget

  ngOnInit(): void {
    this.budgetService.get().subscribe(
      budget => {
        this.budget = budget[0]
        console.log('AQUI => ' + this.budget.value)
      }
    );
  }

}
