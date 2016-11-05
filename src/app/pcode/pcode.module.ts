import { NgModule } from '@angular/core';

import { SharedModule } from '../shared/shared.module';
import { PCodeComponent } from './pcode.component';
import { PCodeRoutingModule } from './pcode-routing.module';

@NgModule({
  imports: [
    SharedModule,
    PCodeRoutingModule
  ],
  declarations: [
    PCodeComponent
  ]
})
export class PCodeModule { }
