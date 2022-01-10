import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProgressComponent } from './progress/progress.component';
import { DropzoneComponent } from './dropzone/dropzone.component';
import { DndDirective } from '../directives/dnd.directive';

@NgModule({
  declarations: [ProgressComponent, DropzoneComponent, DndDirective],
  imports: [CommonModule],
  exports: [ProgressComponent, DropzoneComponent],
})
export class DropzoneModule {}
