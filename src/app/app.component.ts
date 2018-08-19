import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'd3-zoomable-angular5-map';

  public sightingsData = {
    batman: [
        'Tucson',
        'San Francisco',
        'Santa Barbara',
        'New York City',
        'Washington DC'
    ],
    wonderwoman: [
        'Munich',
        'Rome',
        'Paris',
        'Madrid',
        'Prague'
    ],
    thor: [
        'Munich',
        'Johannesburg',
        'New York City',
        'Moscow',
        'Beijing'
    ],
    wolverine: [
        'Paris',
        'Santa Barbara',
        'New York City',
        'Prague',
        'Beijing'
    ]
  };
}
