import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { registerLocaleData } from '@angular/common'
import localePT from '@angular/common/locales/pt'
import {MatGridListModule} from '@angular/material/grid-list'; 

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { SenatorsListComponent } from './senators-list/senators-list.component';
import { SenatorExpensesComponent } from './senator-expenses/senator-expenses.component';

import { MatButtonModule} from '@angular/material/button';
import { MatInputModule} from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule} from '@angular/material/list';
import {MatToolbarModule} from '@angular/material/toolbar'; 

import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { MatTableModule } from '@angular/material/table';
import { ExpenseTypePipe } from './expense-type.pipe'  

registerLocaleData(localePT);

@NgModule({
  declarations: [
    AppComponent,
    SenatorsListComponent,
    SenatorExpensesComponent,
    ExpenseTypePipe,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    ReactiveFormsModule,
    HttpClientModule,
    MatButtonModule,
    MatInputModule,
    MatFormFieldModule,
    MatIconModule,  
    MatListModule,
    MatToolbarModule,
    MatTableModule,
    MatGridListModule
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
