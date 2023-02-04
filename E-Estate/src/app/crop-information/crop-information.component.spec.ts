import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CropInformationComponent } from './crop-information.component';

describe('CropInformationComponent', () => {
  let component: CropInformationComponent;
  let fixture: ComponentFixture<CropInformationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CropInformationComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CropInformationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
