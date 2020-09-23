import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  public icon: string;
  public icons = [
      {
        name: 'Circle',
        path: '../assets/circle.svg'
      },
      {
        name: 'triangle',
        path: '../assets/triangle.svg'
      },
      {
        name: 'square',
        path: '../assets/square.svg'
      },
      {
        name: 'Duke',
        path: 'https://upload.wikimedia.org/wikipedia/commons/5/5d/Duke_%28Java_mascot%29_waving.svg'
      }
    ]
}
