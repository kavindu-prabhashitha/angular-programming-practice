import { INavbarData } from "./helper";

export const navbarData:INavbarData[] =[
  {
    routerLink:'dashboard',
    icon:'fa-lg fa-solid fa-home',
    label:'Dashboard'
  },
  {
    routerLink:'products',
    icon:'fa-lg fa-solid fa-box-open',
    label:'Products'
  },
  {
    routerLink:'statistics',
    icon:'fa-lg fa-solid fa-chart-bar',
    label:'Statistics'
  },
  {
    routerLink:'coupons',
    icon:'fa-lg fa-solid fa-tags',
    label:'Coupons',
    // items:[
    //   {
    //     routerLink:'coupons/list',
    //     label:'List Coupons',
    //   },
    //   {
    //     routerLink:'coupons/create',
    //     label:'Create Coupons',
    //   }
    // ]
  },
  {
    routerLink:'pages',
    icon:'fa-lg fa-solid fa-file',
    label:'Pages'
  },
  {
    routerLink:'media',
    icon:'fa-lg fa-solid fa-camera',
    label:'Media'
  },
  {
    routerLink:'settings',
    icon:'fa-lg fa-solid fa-cog',
    label:'Settings'
  },
  {
    routerLink:'settings',
    icon:'fa-lg fa-solid fa-angle-right',
    label:'Settings'
  }
  ,  {
    routerLink:'settings',
    icon:'fa-lg fa-solid fa-cog',
    label:'Settings'
  }
]
