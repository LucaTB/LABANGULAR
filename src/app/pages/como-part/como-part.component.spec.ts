import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ComoPartComponent } from './como-part.component';

describe('ComoPartComponent', () => {
  let component: ComoPartComponent;
  let fixture: ComponentFixture<ComoPartComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ComoPartComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ComoPartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
