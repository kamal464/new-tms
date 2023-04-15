import {
  Component,
  OnInit,
  ChangeDetectionStrategy,
  ChangeDetectorRef,
  Input,
} from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CompanyService } from 'src/app/shared/services/company.service';

@Component({
  selector: 'app-company',
  templateUrl: './company.component.html',
  styleUrls: ['./company.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CompanyComponent implements OnInit {
  @Input() data: any;

  companyInfo: any = null;
  companyLogo: any = null;

  constructor(
    private companyService: CompanyService,
    private route: ActivatedRoute,
    private router: Router,
    private ref: ChangeDetectorRef
  ) {}

  _selected_option = null;

  updatedCompanyInfo($event: any) {
    this.refreshView();
  }

  updateCompanyLogo(vfs_obj: any) {}

  fetchCompanyLogo(companyId: any) {}

  changeLogo(logo: File) {}

  _available_options = [
    {
      id: 'overview',
      label: 'OVERVIEW',
      tooltip: 'Details about the profile wiht option to view/edit',
    },
    {
      id: 'offices',
      label: 'OFFICES',
      tooltip: 'Details about the personal information.',
    },
    {
      id: 'departments',
      label: 'DEPARTMENTS',
      tooltip: 'Details about the personal information.',
    },
    {
      id: 'department_types',
      label: 'DEPARTMENT TYPES',
      tooltip: 'Details about the personal information.',
    },
    {
      id: 'designations',
      label: 'DESIGNATIONS',
      tooltip: 'Details about the personal information.',
    },
    {
      id: 'grades',
      label: 'GRADES',
      tooltip: 'Details about the personal information.',
    },
    {
      id: 'identifications',
      label: 'IDENTIFICATIONS',
      tooltip: 'Details about the personal information.',
    },
  ];

  ngOnInit(): void {}

  selectOption(option: any) {}

  refreshView() {
    setTimeout(() => {
      this.ref.markForCheck();
    }, 200);
  }
}
