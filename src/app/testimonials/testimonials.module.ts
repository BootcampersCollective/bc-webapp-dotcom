import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TestimonialsRoutingModule } from './testimonials-routing.module';
import { TestimonialsComponent } from './testimonials.component';
import { TestimonialsService } from './testimonials.service';

@NgModule({
  imports: [
    CommonModule,
    TestimonialsRoutingModule
  ],
  providers: [ TestimonialsService ],
  declarations: [TestimonialsComponent]
})
export class TestimonialsModule { }
