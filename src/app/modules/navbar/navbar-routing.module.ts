import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { SidenavComponent } from "./components/sidenav/sidenav.component";
import { NavbarPageComponent } from "src/app/pages/navbar-page/navbar-page.component";
import { DashboardComponent } from "./components/dashboard/dashboard.component";
import { SettingsComponent } from "./components/settings/settings.component";
import { MediaComponent } from "./components/media/media.component";
import { PagesComponent } from "./components/pages/pages.component";
import { CoupensComponent } from "./components/coupens/coupens.component";
import { StatisticsComponent } from "./components/statistics/statistics.component";
import { ProductsComponent } from "./components/products/products.component";

const routes:Routes = [
  {
    path:'',
    component:NavbarPageComponent,
    children:[
      {
        path:'',
        redirectTo:'dashboard',
        pathMatch:'full'
      },
      {path:'dashboard', component:DashboardComponent},
      {path:'products', component:ProductsComponent},
      {path:'statistics', component:StatisticsComponent},
      {path:'coupons', component:CoupensComponent},
      {path:'pages', component:PagesComponent},
      {path:'media', component:MediaComponent},
      {path:'settings', component:SettingsComponent},
    ]

  }
]

@NgModule({
  imports:[RouterModule.forChild(routes)],
  exports:[RouterModule]
})
export class NavbarRoutingModule{

}
