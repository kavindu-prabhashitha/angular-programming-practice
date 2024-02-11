import { NgModule } from "@angular/core";
import { NavbarRoutingModule } from "./navbar-routing.module";
import { SidenavComponent } from "./components/sidenav/sidenav.component";
import { BodyComponent } from "./components/body/body.component";
import { DashboardComponent } from "./components/dashboard/dashboard.component";
import { ProductsComponent } from "./components/products/products.component";
import { StatisticsComponent } from "./components/statistics/statistics.component";
import { CoupensComponent } from "./components/coupens/coupens.component";
import { PagesComponent } from "./components/pages/pages.component";
import { MediaComponent } from "./components/media/media.component";
import { SettingsComponent } from "./components/settings/settings.component";
import { CommonModule } from "@angular/common";
import { NavbarPageComponent } from "src/app/pages/navbar-page/navbar-page.component";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { BrowserModule } from "@angular/platform-browser";
import { SublevelMenuComponent } from './components/sidenav/sublevel-menu.component';

@NgModule({
  declarations:[
    NavbarPageComponent,
    BodyComponent,
    SidenavComponent,
    DashboardComponent,
    ProductsComponent,
    StatisticsComponent,
    CoupensComponent,
    PagesComponent,
    MediaComponent,
    SettingsComponent,
    SublevelMenuComponent
  ],
  imports:[NavbarRoutingModule,CommonModule],
  exports:[]
})
export class NavbarModule {

}
