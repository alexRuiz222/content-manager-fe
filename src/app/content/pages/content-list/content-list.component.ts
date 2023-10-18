import { Component } from '@angular/core';
import { Content } from 'src/app/core/interfaces/content';
import { Topic } from 'src/app/core/interfaces/topic';
import { ContentService } from 'src/app/core/services/content.service';
import { TopicsService } from 'src/app/core/services/topics.service';

@Component({
  selector: 'app-content-list',
  templateUrl: './content-list.component.html',
  styleUrls: ['./content-list.component.scss'],
})
export class ContentListComponent {
  content: Content[] = [];
  topicsFilter: Topic[] = [];
  topics: Topic[] = [];
  topicSelected: number = 0;
  isModalOpen = false;
  constructor(
    private contentSrv: ContentService,
    private topicsSrv: TopicsService
  ) {}

  ngOnInit(): void {
    this.getTopics();
  }

  getTopics() {
    this.topicsSrv.getTopics().subscribe(
      (res) => {
        if (res.ok && res.data) {
          this.topicsFilter = [{ Name: 'All', id: 0 }, ...res.data];
          this.topics = res.data;
        }
        this.getFullContent();
      },
      (err) => {
        console.error(err);
      }
    );
  }

  getFullContent() {
    this.contentSrv.getContentList(true, this.topicSelected).subscribe(
      (res) => {
        if (res.ok && res.data) {
          this.content = res.data;
        }
      },
      (err) => {
        console.error(err);
      }
    );
  }

  openModal() {
    this.isModalOpen = true;
  }

  closeModal(update: Boolean = false) {
    if (update) {
      this.getFullContent();
    }
    this.isModalOpen = false;
  }
}
