import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Content } from 'src/app/core/interfaces/content';

@Component({
  selector: 'app-card-content',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './card-content.component.html',
  styleUrls: ['./card-content.component.scss'],
})
export class CardContentComponent {
  @Input() content!: Content;
}
