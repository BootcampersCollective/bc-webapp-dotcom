import { Component, OnInit } from '@angular/core';

import { TestimonialsService } from './testimonials.service';

import { Testimonial } from './testimonial.interface';

@Component({
  selector: 'app-testimonials',
  templateUrl: './testimonials.component.html',
  styleUrls: ['./testimonials.component.scss']
})
export class TestimonialsComponent implements OnInit {
  testimonials: Testimonial[];

  constructor(private testimonialsService: TestimonialsService) { }

  ngOnInit() {
    this.testimonials = this.testimonialsService.getTestimonials();
  }

}
