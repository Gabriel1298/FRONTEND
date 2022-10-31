import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RedsocialLogoComponent } from './redsocial-logo.component';

describe('RedsocialLogoComponent', () => {
  let component: RedsocialLogoComponent;
  let fixture: ComponentFixture<RedsocialLogoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RedsocialLogoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RedsocialLogoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
