import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { GridViewComponent } from './grid-view/grid-view.component';
import { WordGeneratorService } from './word-generator.service';

@NgModule({
  declarations: [
    GridViewComponent
  ],
  imports: [
    CommonModule,
    FormsModule
  ],
  providers: [WordGeneratorService]
})
export class WordHuntModule { }
