import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConferenceRegComponent } from './conference-reg.component';

describe('ConferenceRegComponent', () => {
  let component: ConferenceRegComponent;
  let fixture: ComponentFixture<ConferenceRegComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ConferenceRegComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ConferenceRegComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
