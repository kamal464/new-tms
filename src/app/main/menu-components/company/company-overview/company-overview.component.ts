import {
  Component,
  OnInit,
  ChangeDetectionStrategy,
  ChangeDetectorRef,
  Input,
  Output,
  EventEmitter,
} from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { CountryService } from 'src/app/shared/services/country.service';
import { CompanyService } from 'src/app/shared/services/company.service';
@Component({
  selector: 'app-company',
  templateUrl: './company-overview.component.html',
  styleUrls: ['./company-overview.component.scss'],
})
export class CompanyComponent implements OnInit {
  _currentAction = 'view';
  companyInfo: any = null;

  @Input() companyId = null;
  @Output() updateCompany = new EventEmitter<any>();
  errorMsg = '';
  isProcessing = false;
  companyDetails: FormGroup;

  _countries: Map<string, any> = new Map();

  constructor(
    private formBuilder: FormBuilder,
    private countryService: CountryService,
    private companyService: CompanyComponent
  ) {
    this.companyDetails = this.formBuilder.group({
      legalname: [
        { value: '', disabled: this.isProcessing },
        Validators.required,
      ],
      name: [{ value: '', disabled: this.isProcessing }, Validators.required],
      fkcountrycode: [
        { value: null, disabled: this.isProcessing },
        Validators.required,
      ],
      phone: [{ value: '', disabled: this.isProcessing }],
      fax: [{ value: '', disabled: this.isProcessing }],
      email: [{ value: '', disabled: this.isProcessing }],
      website: [{ value: '', disabled: this.isProcessing }],
      whatsapp: [{ value: '', disabled: this.isProcessing }],
      linkedin: [{ value: '', disabled: this.isProcessing }],
      remarks: [{ value: '', disabled: this.isProcessing }],
    });
  }

  ngOnInit(): void {
    this._fetchCompany();
  }

  _fetchCompany(): void {}

  updateCompanyInfo(res: any): void {}

  doAction(action: any): void {}

  saveCompanyInformation(): void {}

  getFormData(): any {}

  updateFormData(clear = false): void {}

  refreshview(): void {}
}
