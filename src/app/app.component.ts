import { Component } from '@angular/core';
import * as Mexico from '@svg-maps/mexico'
// const Mexico = require('@svg-maps/mexico');

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  public Mexico: any = Mexico;
  public state: String = "";

  clickLocation(event: Event){
    let location = this.getLocationName(event.target)
    this.state = location
  }

  changeText(event: Event){
    let location = this.getLocationName(event.target)
    this.state = location
  }

  getLocationName(node:any) {
    return node && node.attributes.name.value
  }

}
