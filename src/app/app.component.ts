import {Component, inject, OnInit} from '@angular/core';
import { RouterOutlet } from '@angular/router';
import {SummeryListComponent} from './shared/components/summery-list/summery-list.component';
import { FormsModule } from '@angular/forms';
import { Select } from 'primeng/select';
import {SummeryService} from './summery/summery.service';
import {ContainerComponent} from './shared/components/container/container.component';
import {Button} from 'primeng/button';


@Component({
  selector: 'app-root',
  imports: [RouterOutlet, SummeryListComponent, FormsModule, ContainerComponent, Button],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'summary-report';

}
