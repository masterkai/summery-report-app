import {Component, inject, OnInit} from '@angular/core';
import {Select} from 'primeng/select';
import {Company} from '../../../../domain/summery';
import {SummeryService} from '../../../summery/summery.service';
import {FormsModule} from '@angular/forms';

@Component({
  selector: 'app-summery-compare-ui',
  imports: [
    Select,
    FormsModule
  ],
  templateUrl: './summery-compare-ui.component.html',
  styleUrl: './summery-compare-ui.component.scss'
})
export class SummeryCompareUiComponent implements OnInit {
  summeryService = inject(SummeryService)
  companies!:Company[];

  selectedCompany!:Company;

  async ngOnInit() {
    const companies = await this.summeryService.getCompanies();
    let result:Company[] = [];
    companies?.forEach(company => {
      result.push({name: company, code: company});
    });
    this.companies = result;
  }
}
