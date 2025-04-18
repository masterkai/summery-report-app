import { Component, signal } from '@angular/core';
import { Dialog } from 'primeng/dialog';
import { Button } from 'primeng/button';

@Component({
  selector: 'app-common-dialog',
  imports: [
    Dialog,
    Button
  ],
  templateUrl: './common-dialog.component.html',
  styleUrl: './common-dialog.component.css'
})
export class CommonDialogComponent {
  visible = signal(false);

  onClose() {
    this.visible.set(false);
  }
  onOpen() {
    this.visible.set(true);
  }
}
