import { Component, input, ViewChild } from '@angular/core';
import {RouterOutlet} from '@angular/router';
import {SummaryListComponent} from './shared/components/summary-list/summary-list.component';
import {FormsModule} from '@angular/forms';
import {ContainerComponent} from './shared/components/container/container.component';
import {Button} from 'primeng/button';
import {Tab, TabList, TabPanel, TabPanels, Tabs} from 'primeng/tabs';
import {Dialog} from 'primeng/dialog';
import {ReportGeneratorComponent} from './shared/components/report-generator/report-generator.component';
import {SummaryCompareUiComponent} from './shared/components/summary-compare-ui/summary-compare-ui.component';
import { CommonDialogComponent } from './shared/components/common-dialog/common-dialog.component';

@Component({
  selector: 'app-root',
  imports: [SummaryListComponent, FormsModule, ContainerComponent, Button, Tabs, TabList, Tab, TabPanels, TabPanel, ReportGeneratorComponent, SummaryCompareUiComponent, CommonDialogComponent],
  templateUrl: './app.component.html',
  standalone: true,
  styleUrl: './app.component.scss'
})
export class AppComponent {
  // use @ViewChild to get the instance of CommonDialogComponent
  @ViewChild(CommonDialogComponent) commonDialog!: CommonDialogComponent;
  title = 'summary-report';
  isDialogVisible = false;

  openDialog() {
    this.isDialogVisible = true;
    this.commonDialog.onOpen();
  }

  closeDialog() {
    this.isDialogVisible = false;
  }
}
