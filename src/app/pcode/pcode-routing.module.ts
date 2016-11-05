import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { PCodeComponent } from './pcode.component';

@NgModule({
  imports: [
    RouterModule.forChild([
      { path: 'pcode/:id', component: PCodeComponent }
    ])
  ]
})
export class PCodeRoutingModule { }
