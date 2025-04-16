import {Component, OnInit, signal} from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { filter, map } from 'rxjs/operators';
import { TableModule } from 'primeng/table';
import { CommonModule } from '@angular/common';
import {Company, Summery} from '../../../../domain/summery';
import {SummeryService} from '../../../summery/summery.service';
import {Select} from 'primeng/select';
import {FormsModule} from '@angular/forms';
import {Button} from 'primeng/button';
@Component({
  selector: 'app-summery-list',
  imports: [TableModule, CommonModule, Select, FormsModule, Button],
  templateUrl: './summery-list.component.html',
  standalone: true,
  styleUrl: './summery-list.component.css'
})
export class SummeryListComponent implements OnInit {
  companies!:Company[];
  summaries! :Summery[];
  filteredSummaries = signal<Summery[]>([]);
  selectedCompany: Company | undefined;

  constructor(private summeryService: SummeryService) {}
  async ngOnInit() {
    this.summeryService.getAll().then(r=>{
      this.summaries = r;
    })
    const companies = await this.summeryService.getCompanies();
    let result:Company[] = [];
    companies?.forEach(company => {
      result.push({name: company, code: company});
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
