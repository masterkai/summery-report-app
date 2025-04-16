import {Component, input} from '@angular/core';
import {RouterOutlet} from '@angular/router';
import {SummaryListComponent} from './shared/components/summary-list/summary-list.component';
import {FormsModule} from '@angular/forms';
import {ContainerComponent} from './shared/components/container/container.component';
import {Button} from 'primeng/button';
import {Tab, TabList, TabPanel, TabPanels, Tabs} from 'primeng/tabs';
import {Dialog} from 'primeng/dialog';
import {ReportGeneratorComponent} from './shared/components/report-generator/report-generator.component';
import {SummaryCompareUiComponent} from './shared/components/summary-compare-ui/summary-compare-ui.component';

@Component({
  selector: 'app-root',
  imports: [SummaryListComponent, FormsModule, ContainerComponent, Button, Tabs, TabList, Tab, TabPanels, TabPanel, ReportGeneratorComponent, SummaryCompareUiComponent],
  templateUrl: './app.component.html',
  standalone: true,
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'summary-report';
  isDialogVisible = false;

  openDialog() {
    this.isDialogVisible = true;
  }

  closeDialog() {
    this.isDialogVisible = false;
  }
}
