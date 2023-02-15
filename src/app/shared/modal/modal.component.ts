import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.scss']
})
export class ModalComponent {

  @Input() show: boolean = false;
  @Output() close: EventEmitter<void> = new EventEmitter();

  closeModal() {
    this.show = false;
    this.close.emit();
  }

}
