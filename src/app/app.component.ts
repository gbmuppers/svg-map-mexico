import { Component } from '@angular/core';
import * as Mexico from '@svg-maps/mexico'


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  public Mexico: any = Mexico;
  public state: String = "";
  public tooltipStyle:any;

  clickLocation(event: Event){
    let location = this.getLocationName(event.target)
    this.state = location
  }

  changeText(event: Event){
    let location = this.getLocationName(event.target)
    this.state = location
    this.moveOnLocation(event)
  }

  getLocationName(node:any) {
    return node && node.attributes.name.value
  }

  moveOnLocation(event:any) {
    this.tooltipStyle = {
      display: 'block',
      top: `${event.clientY + 5}px`,
      left: `${event.clientX - 5}px`,
    }
  }

}
