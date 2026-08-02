import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Freela } from './freela';

describe('Freela', () => {
  let component: Freela;
  let fixture: ComponentFixture<Freela>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Freela],
    }).compileComponents();

    fixture = TestBed.createComponent(Freela);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
