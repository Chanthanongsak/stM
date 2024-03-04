import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LayoutComponent } from './layout/layout.component';
import { HomeComponent } from './home/home.component';
import { ServiceComponent } from './service/service.component';
import { NewsActivitiesComponent } from './news-activities/news-activities.component';
import { NewsActivitiesDetailComponent } from './news-activities/news-activities-detail/news-activities-detail.component';
import { AboutHistoryComponent } from './about/about-history/about-history.component';
import { AboutStructureComponent } from './about/about-structure/about-structure.component';
import { AboutVisionComponent } from './about/about-vision/about-vision.component';
import { ContactComponent } from './contact/contact.component';
import { JobComponent } from './job/job.component';
import { ServiceThaiComponent } from './service/service-thai/service-thai.component';
import { ServiceLaoComponent } from './service/service-lao/service-lao.component';
import { ProductComponent } from './product/product.component';
import { ProductDetailComponent } from './product/product-detail/product-detail.component';

const routes: Routes = [
  {
    path: '',
    component: LayoutComponent,
    children:[
      {
        path:'',
        component:HomeComponent
      },
      {
        path:'service/:id',
        component:ServiceComponent
      },

      {
        path:'service/thai/:id',
        component:ServiceThaiComponent
      },

      {
        path:'service/lao/:id',
        component:ServiceLaoComponent
      },
      {
        path:'news-activities',
        component:NewsActivitiesComponent
      },
      {
        path:'news-activities/detail/:id',
        component:NewsActivitiesDetailComponent
      },
      {
        path:'about/history',
        component:AboutHistoryComponent
      },
      {
        path:'about/structure',
        component:AboutStructureComponent
      },
      {
        path:'about/vision',
        component:AboutVisionComponent
      },
      {
        path:'contact',
        component:ContactComponent
      },
      {
        path:'job',
        component:JobComponent
      },
      {
        path:'product/:id',
        component:ProductComponent
      },
      {
        path:'product/product-detail/:id',
        component:ProductDetailComponent
      }
    ]
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
