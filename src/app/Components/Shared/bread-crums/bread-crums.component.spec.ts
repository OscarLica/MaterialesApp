import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BreadCrumsComponent } from './bread-crums.component';

describe('BreadCrumsComponent', () => {
  let component: BreadCrumsComponent;
  let fixture: ComponentFixture<BreadCrumsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BreadCrumsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BreadCrumsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
