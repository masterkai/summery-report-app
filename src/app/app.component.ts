import {Component, input} from '@angular/core';
import {RouterOutlet} from '@angular/router';
import {SummeryListComponent} from './shared/components/summery-list/summery-list.component';
import {FormsModule} from '@angular/forms';
import {ContainerComponent} from './shared/components/container/container.component';
import {Button} from 'primeng/button';
import {Tab, TabList, TabPanel, TabPanels, Tabs} from 'primeng/tabs';
import {Dialog} from 'primeng/dialog';
import {ReportGeneratorComponent} from './shared/components/report-generator/report-generator.component';

@Component({
  selector: 'app-root',
  imports: [SummeryListComponent, FormsModule, ContainerComponent, Button, Tabs, TabList, Tab, TabPanels, TabPanel, ReportGeneratorComponent],
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
