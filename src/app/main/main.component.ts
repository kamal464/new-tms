import {
  Component,
  AfterViewInit,
  ChangeDetectionStrategy,
  ChangeDetectorRef,
  ViewChild,
} from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CompanyComponent } from './menu-components/company/company.component';


@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss'],
})
export class MainComponent implements AfterViewInit {
  currentEmployee = null;
  isLoading = false;
  quick_view = '';
  nav_expanded = false;

  constructor(private router: Router) {}



ngAfterViewInit(): void {
    
}


}
