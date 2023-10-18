import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ContentModalComponent } from './content-modal.component';

describe('ContentModalComponent', () => {
  let component: ContentModalComponent;
  let fixture: ComponentFixture<ContentModalComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [ContentModalComponent]
    });
    fixture = TestBed.createComponent(ContentModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
