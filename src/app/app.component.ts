import { Component } from '@angular/core';
import { interval } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  public icon: string;
  public xpos: number = 0;
  public ypos: number = 600;


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

    constructor() {
      interval(10).subscribe( t => {
        this.xpos += 2;
        if (this.xpos > 900) this.xpos = 0;
        // this.xpos = Math.floor(Math.random() * 800);
        this.ypos = 300;
        // this.ypos = Math.floor(Math.random() * 600);
      });

    }
}
