import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { ContentRoutingModule } from './content-routing.module';
import { ContentListComponent } from './pages/content-list/content-list.component';
import { ContentComponent } from './pages/content/content.component';
import { ContentDetailComponent } from './pages/content-detail/content-detail.component';
import { CategoryComponent } from '../common/components/category/category.component';
import { TopicComponent } from '../common/components/topic/topic.component';
import { ContentModalComponent } from '../common/components/content-modal/content-modal.component';

@NgModule({
  declarations: [
    ContentListComponent,
    ContentComponent,
    ContentDetailComponent,
  ],
  imports: [
    CommonModule,
    ContentRoutingModule,
    CategoryComponent,
    TopicComponent,
    FormsModule,
    ContentModalComponent,
  ],
  bootstrap: [ContentComponent],
})
export class ContentModule {}
