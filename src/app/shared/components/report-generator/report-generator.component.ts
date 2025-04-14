import {Component, EventEmitter, Output, Input, input} from '@angular/core';
import {Button} from 'primeng/button';
import {Dialog} from 'primeng/dialog';
import {CommonModule} from '@angular/common';

@Component({
  selector: 'app-report-generator',
  imports: [
    CommonModule
  ],
  templateUrl: './report-generator.component.html',
  styleUrl: './report-generator.component.css'
})
export class ReportGeneratorComponent {
  @Input() show = false;
  @Output() close = new EventEmitter<void>();

  onClose() {
    this.close.emit();
  }
}
