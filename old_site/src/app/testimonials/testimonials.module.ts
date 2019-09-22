import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CoreModule } from '../core/core.module';

import { TestimonialsRoutingModule } from './testimonials-routing.module';
import { TestimonialsComponent } from './testimonials.component';
import { TestimonialsService } from './testimonials.service';
import { ApiService } from '../core/api-service.service';

@NgModule({
  imports: [
    CommonModule,
    TestimonialsRoutingModule
  ],
  providers: [ TestimonialsService, ApiService ],
  declarations: [TestimonialsComponent]
})
export class TestimonialsModule { }
