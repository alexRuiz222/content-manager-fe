import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ContentListComponent } from './pages/content-list/content-list.component';
import { ContentComponent } from './pages/content/content.component';
import { ContentDetailComponent } from './pages/content-detail/content-detail.component';

const routes: Routes = [
  {
    path: '',
    component: ContentComponent,
    children: [
      { path: '', component: ContentListComponent },
      { path: ':id', component: ContentDetailComponent },
    ],
  },
  // {
  //   path: ':id',
  //   component: ContentComponent,
  // },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ContentRoutingModule {}
