import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DeckchairLocationComponent } from './deckchair-location.component';

describe('DeckchairLocationComponent', () => {
  let component: DeckchairLocationComponent;
  let fixture: ComponentFixture<DeckchairLocationComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DeckchairLocationComponent]
    });
    fixture = TestBed.createComponent(DeckchairLocationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
