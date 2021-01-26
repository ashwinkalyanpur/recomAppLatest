import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ExhibitorRegComponent } from './exhibitor-reg.component';

describe('ExhibitorRegComponent', () => {
  let component: ExhibitorRegComponent;
  let fixture: ComponentFixture<ExhibitorRegComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ExhibitorRegComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ExhibitorRegComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
