import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CustomButtonComponent } from './custom-button/custom-button.component';
import { MatButtonModule } from '@angular/material/button';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { TabsComponent } from './tabs/tabs.component';
import { TabComponent } from './tab/tab.component';

@NgModule({
  declarations: [CustomButtonComponent, TabsComponent, TabComponent],
  imports: [CommonModule, MatButtonModule, FontAwesomeModule],
  exports: [CustomButtonComponent, TabsComponent, TabComponent],
})
export class SharedModule {}
