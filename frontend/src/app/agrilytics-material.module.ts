import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatSortModule, MatTableModule } from '@angular/material';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
  ],
  exports: [
    MatTableModule,
    MatSortModule,
  ]
})
export class AgrilyticsMaterialModule { }
