import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ImmatureRubberComponent } from './immature-rubber.component';

describe('ImmatureRubberComponent', () => {
  let component: ImmatureRubberComponent;
  let fixture: ComponentFixture<ImmatureRubberComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ImmatureRubberComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ImmatureRubberComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
