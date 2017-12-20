import { Component, OnInit } from '@angular/core';

import { Event } from './event.interface';

@Component({
  selector: 'app-events',
  templateUrl: './events.component.html',
  styleUrls: ['./events.component.scss']
})
export class EventsComponent implements OnInit {
  events: Event[];

  constructor() { }

  ngOnInit() {
  }

}
