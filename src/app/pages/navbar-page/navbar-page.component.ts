import { Component } from "@angular/core";

interface SideNavToggle {
  screenWidth: number;
  collapsed:boolean;
}

@Component({
  selector:'nav-bar-page',
  templateUrl:'./navbar-page.component.html',
  styleUrls:['./navbar-page.component.scss'],
})
export class NavbarPageComponent{
  isSideNavCollapsed =false;
  screenWidth=0;

  onToggleSideNav(data:SideNavToggle):void{
    this.screenWidth = data.screenWidth;
    this.isSideNavCollapsed = data.collapsed;
  }
}
