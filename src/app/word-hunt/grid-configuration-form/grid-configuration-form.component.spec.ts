import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FormsModule } from '@angular/forms';
import { RouterTestingModule } from '@angular/router/testing';
import { GridConfigurationService } from '../grid-configuration.service';
import { WordGeneratorService } from '../word-generator.service';

import { GridConfigurationFormComponent } from './grid-configuration-form.component';

describe('GridConfigurationFormComponent', () => {
  let component: GridConfigurationFormComponent;
  let fixture: ComponentFixture<GridConfigurationFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GridConfigurationFormComponent],
      imports: [FormsModule, RouterTestingModule],
      providers: [WordGeneratorService, GridConfigurationService]
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
