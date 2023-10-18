import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CardContentComponent } from '../card-content/card-content.component';
import { Content } from 'src/app/core/interfaces/content';

@Component({
  selector: 'app-topic',
  standalone: true,
  imports: [CommonModule, CardContentComponent],
  templateUrl: './topic.component.html',
  styleUrls: ['./topic.component.scss'],
})
export class TopicComponent {
  @Input() name: string = '';
  @Input() contentCards: any = [];
}
