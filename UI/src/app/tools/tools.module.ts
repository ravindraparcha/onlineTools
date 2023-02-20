import { NgModule, NO_ERRORS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Base64Component } from './base64/base64.component';
import { AngularMaterialModule } from '../helpers/angular-material/material.module';


@NgModule({
  declarations: [
    Base64Component
  ],
  imports: [
    CommonModule,
    AngularMaterialModule
  ],
  exports: [Base64Component],
  schemas: [NO_ERRORS_SCHEMA]
})
export class ToolsModule { }
