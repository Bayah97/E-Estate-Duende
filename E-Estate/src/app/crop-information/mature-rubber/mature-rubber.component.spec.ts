import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MatureRubberComponent } from './mature-rubber.component';

describe('MatureRubberComponent', () => {
  let component: MatureRubberComponent;
  let fixture: ComponentFixture<MatureRubberComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MatureRubberComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MatureRubberComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
