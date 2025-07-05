import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

// import { whishlistRoutingModule } from './whishlist-routing.module';
import { whishlistRoutingModule } from './whishlist-routing.module';
import { WhishlistComponent } from './whishlist.component';


@NgModule({
  declarations: [
    WhishlistComponent
  ],
  imports: [
    CommonModule,
    whishlistRoutingModule
  ]
})
export class WhishlistModule { }
