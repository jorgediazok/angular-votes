import { Component } from '@angular/core';
import { Link } from './link/link.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  links: Link[];

  constructor() {
    this.links = [
      new Link('Angular', 'http://angular.io', 100),
      new Link('Google', 'http://google.com', 40),
      new Link('Youtube', 'http://youtube.com', 30),
    ];
    console.log(this.links);
  }

  addLink(title: HTMLInputElement, link: HTMLInputElement) {
    return false;
  }
}
