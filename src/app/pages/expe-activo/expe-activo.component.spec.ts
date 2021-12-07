import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ExpeActivoComponent } from './expe-activo.component';

describe('ExpeActivoComponent', () => {
  let component: ExpeActivoComponent;
  let fixture: ComponentFixture<ExpeActivoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ExpeActivoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ExpeActivoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
