import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddZonesComponent } from './add-zones.component';

describe('AddZonesComponent', () => {
  let component: AddZonesComponent;
  let fixture: ComponentFixture<AddZonesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddZonesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddZonesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
