import { NgModule } from '@angular/core';


import { PaginatorComponent } from './paginator.component';
import { MatPaginatorModule } from '@angular/material';

@NgModule({
  declarations: [
    PaginatorComponent,
  ],
  exports: [
    PaginatorComponent,
  ],
  imports: [
    MatPaginatorModule,
  ],
  providers: [
  ]
})
export class PaginatorModule { }
