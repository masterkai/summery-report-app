import {Component, OnInit} from '@angular/core';
import { TableModule } from 'primeng/table';
import { CommonModule } from '@angular/common';
import {Company, Summery} from '../../../../domain/summery';
import {SummeryService} from '../../../summery/summery.service';
import {Select} from 'primeng/select';
import {FormsModule} from '@angular/forms';
@Component({
  selector: 'app-summery-list',
  imports: [TableModule, CommonModule, Select, FormsModule],
  templateUrl: './summery-list.component.html',
  styleUrl: './summery-list.component.css'
})
export class SummeryListComponent implements OnInit {
  companies!:Company[];
  selectedCompany: Company | undefined;
  summaries! :Summery[]

  constructor(private summeryService: SummeryService) {  }
  async ngOnInit() {
    this.summeryService.getAll().then(r=>{
      this.summaries = r;
    })
    const companies = await this.summeryService.getCompanies();
    let result:Company[] = [];
    companies.forEach(company => {
      result.push({name: company, code: company});
    });
    this.companies = result;
  }
}
