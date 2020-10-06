import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CodetileComponent } from './codetile.component';

describe('CodetileComponent', () => {
  let component: CodetileComponent;
  let fixture: ComponentFixture<CodetileComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CodetileComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CodetileComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
