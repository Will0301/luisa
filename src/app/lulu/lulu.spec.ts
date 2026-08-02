import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Lulu } from './lulu';

describe('Lulu', () => {
  let component: Lulu;
  let fixture: ComponentFixture<Lulu>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Lulu],
    }).compileComponents();

    fixture = TestBed.createComponent(Lulu);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
