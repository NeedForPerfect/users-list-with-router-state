import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatTableModule } from '@angular/material/table';
import { MatProgressBarModule } from '@angular/material/progress-bar';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    MatTableModule,
    MatProgressBarModule
  ],
  exports: [
    MatTableModule,
    MatProgressBarModule
  ]
})
export class ExportMaterialModule { }
