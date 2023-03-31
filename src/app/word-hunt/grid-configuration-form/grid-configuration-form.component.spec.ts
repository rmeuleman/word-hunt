import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GridConfigurationFormComponent } from './grid-configuration-form.component';

describe('GridConfigurationFormComponent', () => {
  let component: GridConfigurationFormComponent;
  let fixture: ComponentFixture<GridConfigurationFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GridConfigurationFormComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GridConfigurationFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
