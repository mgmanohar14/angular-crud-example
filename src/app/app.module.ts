import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';


import { HttpClientModule } from "@angular/common/http";

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AgGridModule } from 'ag-grid-angular';

import { HomeComponent } from './crud/home/home.component';
import { DetailsComponent } from './crud/details/details.component';
import { CreateComponent } from './crud/create/create.component';
import { UpdateComponent } from './crud/update/update.component';
import { CrudService } from './crud/crud.service';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent, HomeComponent, DetailsComponent, CreateComponent, UpdateComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    NgbModule,
    AgGridModule.withComponents([]),
  ],
  providers: [CrudService],
  bootstrap: [AppComponent]
})
export class AppModule { }
