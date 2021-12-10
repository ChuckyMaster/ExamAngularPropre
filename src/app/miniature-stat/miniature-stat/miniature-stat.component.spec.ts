import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MiniatureStatComponent } from './miniature-stat.component';

describe('MiniatureStatComponent', () => {
  let component: MiniatureStatComponent;
  let fixture: ComponentFixture<MiniatureStatComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MiniatureStatComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MiniatureStatComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
