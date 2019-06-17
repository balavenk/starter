import { Component, OnInit ,PipeTransform} from '@angular/core';
import { NgbModalConfig, NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { DecimalPipe } from '@angular/common';
import { FormControl } from '@angular/forms';

import { Observable } from 'rxjs';
import { map, startWith } from 'rxjs/operators';
interface ou {
  OUName: string;
  OUAdmin: string;
  TotalProjects: number;
  Clouds: string;
  TotalResources:number;
  TotalCost:number;
}
const OUs: ou[] = [
  {
    OUName: 'Sample 1',
    OUAdmin: 'John Wick',
    TotalProjects: 2,
    Clouds: 'AWS',
    TotalResources:233,
    TotalCost:900000
  }, {
    OUName: 'Sample 2',
    OUAdmin: 'Sandy',
    TotalProjects: 2,
    Clouds: 'AWS',
    TotalResources:223,
    TotalCost:900000
  }];
  function search(text: string, pipe: PipeTransform): ou[] {
    return OUs.filter(ou => {
      const term = text.toLowerCase();
      return ou.OUName.toLowerCase().includes(term)
          || pipe.transform(ou.OUAdmin).includes(term)
          || pipe.transform(ou.TotalProjects).includes(term);
    });
  }
@Component({
  selector: 'organization',
  templateUrl: './organization.component.html',
  styleUrls: ['./organization.component.scss'],
   providers: [NgbModalConfig, NgbModal,DecimalPipe]
})
export class OrganizationComponent implements OnInit {
  ous$: Observable<ou[]>;
  filter = new FormControl('');
  ngOnInit() {
  }
  constructor(config: NgbModalConfig, private modalService: NgbModal,pipe: DecimalPipe) {
    this.ous$ = this.filter.valueChanges.pipe(
      startWith(''),
      map(text => search(text, pipe))
    );
    config.backdrop = 'static';
    config.keyboard = false;
                              
  }
 
  formatLabel(value: number | null) {
    if (!value) {
      return 0;
    }

    if (value >= 1000) {
      return Math.round(value / 1000) + '%';
    }

    return value;
  }
  open(content) {
    this.modalService.open(content,{ size: 'lg', backdrop: 'static' });
  }
  OuView(contentView) {
    this.modalService.open(contentView,{ size: 'lg', backdrop: 'static' });
  }
  Ouedit(editcontentView) {
    this.modalService.open(editcontentView,{ size: 'lg', backdrop: 'static' });
  }
}
