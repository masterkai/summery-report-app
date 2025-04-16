import { Component, OnInit, signal } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { filter, map } from 'rxjs/operators';
import { TableModule } from 'primeng/table';
import { CommonModule } from '@angular/common';
import { Company, Summary } from '../../../../domain/summary';
import { SummaryService } from '../../../summary/summary.service';
import { Select } from 'primeng/select';
import { FormsModule } from '@angular/forms';
import { Button } from 'primeng/button';

@Component({
  selector: 'app-summary-list',
  imports: [TableModule, CommonModule, Select, FormsModule, Button],
  templateUrl: './summary-list.component.html',
  standalone: true,
  styleUrl: './summary-list.component.css'
})
export class SummaryListComponent implements OnInit {
  companies!: Company[];
  summaries!: Summary[];
  filteredSummaries = signal<Summary[]>([]);
  selectedCompany: Company | undefined;

  constructor(private summaryService: SummaryService) {
  }

  async ngOnInit() {
    this.summaryService.getAll().then(r => {
      this.summaries = r;
    })
    const companies = await this.summaryService.getCompanies();
    let result: Company[] = [];
    companies?.forEach(company => {
      result.push({ name: company, code: company });
    });
    this.companies = result;
    this.filteredSummaries.set(this.summaries);
  }

  onReset() {
    this.selectedCompany = undefined;
    this.filteredSummaries.set(this.summaries);
  }

  onCompanyChange() {
    const filteredSummaries = this.summaries.filter(summery => summery.company === this.selectedCompany?.name);
    this.filteredSummaries.set(filteredSummaries);
  }
}
