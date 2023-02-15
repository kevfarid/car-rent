import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss'],
})
export class CardComponent {
  @Input() title: string = 'card';
  @Input() image: string = '';
  @Input() description: string = '';
  @Input() price: number = 0;
  @Input() model: string = '2001';
  @Input() brand: string = 'card';

  @Output() clickButton: EventEmitter<void> = new EventEmitter();

  onClick() {
    this.clickButton.emit();
  }
}
