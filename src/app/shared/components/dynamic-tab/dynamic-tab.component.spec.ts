import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DynamicTabComponent } from './dynamic-tab.component';

describe('DynamicTabComponent', () => {
  let component: DynamicTabComponent;
  let fixture: ComponentFixture<DynamicTabComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DynamicTabComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DynamicTabComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
