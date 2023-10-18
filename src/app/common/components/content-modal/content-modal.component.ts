import { Component, EventEmitter, Output } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CategoriesService } from 'src/app/core/services/categories.service';
import { TopicsService } from 'src/app/core/services/topics.service';
import { Topic } from 'src/app/core/interfaces/topic';
import {
  FormControl,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { ContentService } from 'src/app/core/services/content.service';

@Component({
  selector: 'app-content-modal',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './content-modal.component.html',
  styleUrls: ['./content-modal.component.scss'],
})
export class ContentModalComponent {
  @Output() close: EventEmitter<{ update: Boolean }> = new EventEmitter<{
    update: Boolean;
  }>();
  categories: any[] = [];
  topics: Topic[] = [];
  contentForm = new FormGroup({
    title: new FormControl('', [Validators.required]),
    categoryId: new FormControl(1, [Validators.required]),
    topicId: new FormControl(1, [Validators.required]),
    videoUrl: new FormControl(''),
  });
  file: Blob | undefined;
  constructor(
    private categoriesSrv: CategoriesService,
    private topicsSrv: TopicsService,
    private contentsSrv: ContentService
  ) {}

  ngOnInit(): void {
    this.getCategories();
    this.getTopics();
  }

  closeModal(update = false) {
    this.close.emit({ update });
  }

  getCategories() {
    this.categoriesSrv.getCategories().subscribe((res: any) => {
      this.categories = res.data;
      console.log(this.categories);
    });
  }

  getTopics() {
    this.topicsSrv.getTopics().subscribe(
      (res) => {
        if (res.ok && res.data) {
          this.topics = res.data;
        }
      },
      (err) => {
        console.error(err);
      }
    );
  }

  onFileSelected(event: Event) {
    const input = event.target as HTMLInputElement;
    if (input.files && input.files.length > 0) {
      this.file = input.files[0];
    }
  }

  createContent() {
    console.log(this.contentForm.value);
    if (!this.contentForm.valid) {
      return;
    }

    const formData = new FormData();
    formData.append('Title', this.contentForm.value.title || '');
    formData.append(
      'CategoryId',
      this.contentForm.value.categoryId?.toString() || ''
    );
    formData.append(
      'TopicId',
      this.contentForm.value.topicId?.toString() || ''
    );
    if (this.contentForm.value.categoryId == 1) {
      formData.append('Url', this.contentForm.value.videoUrl || '');
    } else {
      formData.append('file', this.file || '');
    }

    this.contentsSrv.createContent(formData).subscribe(() => {
      this.closeModal(true);
    });
  }
}
