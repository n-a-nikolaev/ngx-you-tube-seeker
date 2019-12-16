import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { YoutubeResultComponent } from './youtube-result.component';

describe('YoutubeResultComponent', () => {
  let component: YoutubeResultComponent;
  let fixture: ComponentFixture<YoutubeResultComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ YoutubeResultComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(YoutubeResultComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
