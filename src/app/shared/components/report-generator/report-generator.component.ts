import {Component, EventEmitter, Output, Input, OnInit} from '@angular/core';
import {CommonModule} from '@angular/common';
import {Toast} from 'primeng/toast';
import {FileUpload, FileUploadEvent} from 'primeng/fileupload';
import {MessageService} from 'primeng/api';
import {InputText} from 'primeng/inputtext';
import {FormControl, FormGroup, FormsModule, ReactiveFormsModule} from '@angular/forms';
import { DatePicker } from 'primeng/datepicker';
import {RadioButtonModule} from 'primeng/radiobutton';
import {Button} from 'primeng/button';
import utils, {Quarter, Year} from '../../utils/utils';
import {Select} from 'primeng/select';

@Component({
  selector: 'app-report-generator',
  imports: [
    CommonModule,
    Toast,
    FileUpload,
    InputText,
    FormsModule,
    RadioButtonModule,
    ReactiveFormsModule,
    Button,
    Select
  ],
  templateUrl: './report-generator.component.html',
  standalone: true,
  styleUrl: './report-generator.component.scss'
})
export class ReportGeneratorComponent implements  OnInit {
  constructor(private messageService: MessageService) { }
  @Input() show = false;
  @Output() close = new EventEmitter<void>();
  fileName: string | null = null; // Property to store the file name
  companyName: string | undefined;
  years: Year[] | undefined;
  quarters: Quarter[] | undefined;
  selectedYear: Year | undefined;
  selectedQuarter: Quarter | undefined;
  value: string | undefined;
  formGroup!: FormGroup;

  categories: {name:string;key:string}[] = [
    { name: '單次分析', key: 'S' },
    { name: '雙重分析 (更全面但需要更多時間)', key: 'D' },
  ];

  onClose() {
    this.close.emit();
  }

  onBasicUploadAuto(event: FileUploadEvent) {
    console.log(event.files[0]);
    if (event.files && event.files.length > 0) {
      this.fileName = event.files[0].name; // Extract the file name
    }
    this.messageService.add({ severity: 'info', summary: 'Success', detail: 'File Uploaded with Auto Mode' });
  }

  ngOnInit() {
    this.formGroup = new FormGroup({
      selectedCategory: new FormControl()
    });
    this.years = utils.yearOptionGenerator(2010);
    this.quarters = utils.quarterOptionGenerator();
  }

  trackByCategoryName(index: number, category: { name: string; key: string }): string {
    return category.name;
  }

  onRemoveFile() {
    this.fileName = null; // Clear the file name
    this.messageService.add({ severity: 'info', summary: 'Success', detail: 'File Removed' });
  }
}
