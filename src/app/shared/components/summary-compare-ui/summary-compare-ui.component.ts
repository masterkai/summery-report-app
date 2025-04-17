import { Component, inject, OnInit, signal } from '@angular/core';
import { Select } from 'primeng/select';
import { Company, Summary } from '../../../../domain/summary';
import { SummaryService } from '../../../summary/summary.service';
import { FormsModule } from '@angular/forms';
import { MultiSelectModule } from 'primeng/multiselect';
import { ChipModule } from 'primeng/chip';
import { CommonModule } from '@angular/common';
import { CheckboxGroupComponent } from '../checkbox-group/checkbox-group.component';
import { Button } from 'primeng/button';

@Component({
  selector: 'app-summary-compare-ui',
  imports: [
    Select,
    MultiSelectModule,
    FormsModule,
    CommonModule,
    CheckboxGroupComponent,
    Button,
    ChipModule
  ],
  templateUrl: './summary-compare-ui.component.html',
  styleUrl: './summary-compare-ui.component.scss'
})
export class SummaryCompareUiComponent implements OnInit {
  summeryService = inject(SummaryService)
  companies!: Company[];
  summaries!: Summary[];
  selectedOptions: string[] = [];
  themes: Theme[] = [
    { name: '供應鏈管理', key: '供應鏈管理' },
    { name: '其他', key: '其他' },
    { name: '客戶需求', key: '客戶需求' },
    { name: '市場競爭', key: '市場競爭' },
    { name: '營運回顧', key: '營運回顧' },
    { name: '營運展望', key: '營運展望' },
    { name: '產品策略', key: '產品策略' },
    { name: '研發投資及策略', key: '研發投資及策略' },
    { name: '股東提問回應', key: '股東提問回應' },
    { name: '財務數據', key: '財務數據' },
    { name: '資本支出', key: '資本支出' },
    { name: '雲端及AI營運回顧', key: '雲端及AI營運回顧' },
    { name: '雲端及AI營運展望', key: '雲端及AI營運展望' },
  ];

  filteredSummaries = signal<Summary[]>([]);
  selectedSummaries!: Summary[];
  selectedCompany!: Company;

  async ngOnInit() {
    // Fetch the summaries from the service
    this.summaries = await this.summeryService.getAll();
    const companies = await this.summeryService.getCompanies();
    let result: Company[] = [];
    companies?.forEach(company => {
      result.push({ name: company, code: company });
    });
    this.companies = result;


  }

  onFilterSummaries(company: Company) {
    const companyName = company.name.toLowerCase();
    this.filteredSummaries.set(this.summaries.filter(summary => summary.company.toLowerCase().includes(companyName)));
  }

  onGenerateReport() {
    console.log('onGenerateReport',this.selectedOptions);
  }

  onOptionsChanged($event: string[]) {
    this.selectedOptions = $event
  }

  removeSummery(summary: Summary) {
    this.selectedSummaries = this.selectedSummaries.filter(s => s !== summary);
  }
}

interface Theme {
  name: string;
  key: string;
}
