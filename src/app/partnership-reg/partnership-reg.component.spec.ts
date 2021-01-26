import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PartnershipRegComponent } from './partnership-reg.component';

describe('PartnershipRegComponent', () => {
  let component: PartnershipRegComponent;
  let fixture: ComponentFixture<PartnershipRegComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PartnershipRegComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PartnershipRegComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
