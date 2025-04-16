import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormArray, FormBuilder, FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { NgForOf } from '@angular/common';

@Component({
  selector: 'app-checkbox-group',
  imports: [
    ReactiveFormsModule,
    NgForOf
  ],
  templateUrl: './checkbox-group.component.html',
  styleUrl: './checkbox-group.component.css'
})
export class CheckboxGroupComponent implements OnInit {
  @Output() selectedOptionsChange = new EventEmitter<string[]>();
  form: FormGroup;
  optionLabels = [
    '供應鏈管理',
    '其他',
    '客戶需求',
    '市場競爭',
    '營運回顧',
    '營運展望',
    '產品策略',
    '研發投資及策略',
    '股東提問回應',
    '財務數據',
    '資本支出',
    '雲端及AI營運回顧',
    '雲端及AI營運展望',
  ]; // labels for checkboxes

  constructor(private fb: FormBuilder) {
    const controls = this.optionLabels.map(() => new FormControl(false));
    this.form = this.fb.group({
      selectAll: [false],
      options: this.fb.array(controls)
    });
  }

  ngOnInit(): void {
    const selectAllControl = this.form.get('selectAll') as FormControl;
    const optionsArray = this.form.get('options') as FormArray;

    // Select All -> Individual options
    selectAllControl.valueChanges.subscribe((isSelected: boolean) => {
      if (isSelected) {
        this.selectedOptionsChange.emit(this.optionLabels)
      } else {
        this.selectedOptionsChange.emit([]);
      }
      optionsArray.controls.forEach(ctrl => ctrl.setValue(isSelected, { emitEvent: false }));
    });

    // Individual checkboxes -> Select All
    optionsArray.valueChanges.subscribe((values: boolean[]) => {
      const allSelected = values.every(Boolean);
      const noneSelected = values.every(val => !val);
      const selectAll = this.form.get('selectAll') as FormControl;

      // Set selectAll only if it has changed to avoid cycles
      if (allSelected && !selectAll.value) {
        selectAll.setValue(true, { emitEvent: false });
      } else if (!allSelected && selectAll.value) {
        selectAll.setValue(false, { emitEvent: false });
      }

      const selected = values
        .map((v, i) => (v ? this.optionLabels[i] : null))
        .filter(v => v !== null);
      this.selectedOptionsChange.emit(selected);
    });
  }

  get options(): FormArray {
    return this.form.get('options') as FormArray;
  }
}
