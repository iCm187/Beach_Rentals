import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BeachFilterComponent } from './beach-filter.component';

describe('BeachFilterComponent', () => {
  let component: BeachFilterComponent;
  let fixture: ComponentFixture<BeachFilterComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [BeachFilterComponent]
    });
    fixture = TestBed.createComponent(BeachFilterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
