import { Component, OnInit } from '@angular/core';
import { ActivatedRoute} from '@angular/router';
import {Expenses, SenatorsService } from '../senators.service';

@Component({
  selector: 'app-senator-expenses',
  templateUrl: './senator-expenses.component.html',
  styleUrls: ['./senator-expenses.component.css']
})
export class SenatorExpensesComponent implements OnInit {
  senatorName: string;
  expenses: Expenses[] = [];
  expensesByType: { type: number, total: number }[] = [];
  
 
  constructor(private SenatorsService: SenatorsService, private route: ActivatedRoute) { }
  ngOnInit(): void {
      this.route.paramMap.subscribe(paramMap => {
        const id = parseInt(paramMap.get('id'));
        this.SenatorsService.catchSenator(id).subscribe(expenses => {
          this.senatorName = expenses.nomeSenador;
          this.expenses = expenses.despesas;
          this.expensesByType = this.handleExpensesByTipe(this.expenses)
        })
      })
  }
  handleExpensesByTipe(expenses: Expenses[]){
    let result: { type: number, total: number}[] = [];
    for(let i = 1; i <= 7; i++){
      const totalValue = expenses
      .filter(value => value.tipo === i)
      .reduce((total,expense) => total + expense.valor,0);
    result[i - 1] = { type: i, total: totalValue};
    }
    return result
  }
  handleTotal (): number {
    return this.expensesByType.reduce((total,item) => total + item.total,0)
  }


}

