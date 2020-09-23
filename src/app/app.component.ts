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
    ]

  public selectedIcon(icon: string):void {
    this.icon = (!!icon) ? icon : '';
  }

}
