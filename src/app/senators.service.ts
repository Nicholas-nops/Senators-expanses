import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

export interface Senators {
  id: number,
  nomeSenador: string,
}

export interface Expenses {
  tipo: number;
  fornec: string;
  ano: number;
  mes: number;
  dia: number;
  valor: number
}

export interface ExpensesSenator {
  id: number;
  nomeSenador: string;
  despesas: Expenses[];
}
export const types = {
  1: "Rental of real estate and expenses related to them:",
  2: "Divulgation of parliamentary activity:",
  3: "Purchase of material for use in the office:",
  4: "National air, water and land tickets:",
  5: "Hiring consultancies, advisory services, research, technical work and other services:",
  6: "Locomotion, lodging, food and fuel:",
  7: "Private Security Services:"
};


const urlBase = 'http://localhost:3000'

@Injectable({
  providedIn: 'root'
})
export class SenatorsService {

  constructor(public http: HttpClient) { }

  listContacts() {
    return this.http.get<Senators[]>(`${urlBase}/senadores`)
  }
  catchSenator(id: number) {
    return this.http.get<ExpensesSenator>(`${urlBase}/despesasSenadores/${id}`);
  }

  formatType(type: number): string {
    return types[type];
  }
}
