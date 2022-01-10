import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CustomButtonComponent } from './custom-button/custom-button.component';
import { MatButtonModule } from '@angular/material/button';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

@NgModule({
  declarations: [CustomButtonComponent],
  imports: [CommonModule, MatButtonModule, FontAwesomeModule],
  exports: [CustomButtonComponent],
})
export class SharedModule {}
