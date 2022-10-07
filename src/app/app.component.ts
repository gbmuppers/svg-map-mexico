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
  public tooltipStyle:any = {
    display: 'none',
    top: `0px`,
    left: `0px`,
  }
  public currentLocation:String = ""

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
    let location = this.getLocationName(event.target)
    // console.log(`X: ${event.clientX} - Y: ${event.clientY} IN LOC: ${location}`)
    if(this.currentLocation !== location){
      this.currentLocation = location
      this.tooltipStyle = {
        display: 'block',
        top: `${event.clientY-5}px`,
        left: `${event.clientX-5}px`,
      }
    }
  }

  watchPointer(event:any){
    if(event.path[0].attributes.id===undefined){
      this.tooltipStyle = {
        display: 'none',
        top: `${event.clientY}px`,
        left: `${event.clientX}px`,
      }
    }
  }

}
