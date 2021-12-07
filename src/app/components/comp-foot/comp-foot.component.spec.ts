import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CompFootComponent } from './comp-foot.component';

describe('CompFootComponent', () => {
  let component: CompFootComponent;
  let fixture: ComponentFixture<CompFootComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CompFootComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CompFootComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
