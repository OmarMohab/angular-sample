import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DepartmentsCountComponent } from './departments-count.component';

describe('DepartmentsCountComponent', () => {
  let component: DepartmentsCountComponent;
  let fixture: ComponentFixture<DepartmentsCountComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DepartmentsCountComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(DepartmentsCountComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
