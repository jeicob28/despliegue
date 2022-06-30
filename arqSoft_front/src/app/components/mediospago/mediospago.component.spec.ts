import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MediospagoComponent } from './mediospago.component';

describe('MediospagoComponent', () => {
  let component: MediospagoComponent;
  let fixture: ComponentFixture<MediospagoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MediospagoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MediospagoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
