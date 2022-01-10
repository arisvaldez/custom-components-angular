import { Component, Output } from '@angular/core';
import {
  faSpinner,
  faCheckCircle,
  faCaretRight,
  IconDefinition,
} from '@fortawesome/free-solid-svg-icons';

interface BtnConfiguration {
  icon: IconDefinition;
  spin: boolean;
}

@Component({
  selector: 'app-custom-button',
  templateUrl: './custom-button.component.html',
  styleUrls: ['./custom-button.component.scss'],
})
export class CustomButtonComponent {
  faIcon: IconDefinition = faCaretRight;
  spin: boolean = false;

  @Output()
  set setIcon(option: BtnConfiguration) {
    this.faIcon = option.icon;
    this.spin = option.spin;
  }

  save(): void {
    this.setIcon = { icon: faSpinner, spin: true };
    setTimeout(() => {
      this.setIcon = { icon: faCheckCircle, spin: false };
      setTimeout(() => {
        this.setIcon = { icon: faCaretRight, spin: false };
      }, 2500);
    }, 2500);
  }
}
