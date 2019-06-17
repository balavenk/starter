import { Component, OnInit ,PipeTransform} from '@angular/core';
import { NgbModalConfig, NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { DecimalPipe } from '@angular/common';
import { FormControl } from '@angular/forms';
import { Observable } from 'rxjs';
import { map, startWith } from 'rxjs/operators';
interface qa {
  OUName: string;
ProjectName: string;
CloudType: string;
TotalAllocation:{amt:number,per:number};
Consumption:{amt:number,per:number};
NewAllocation:{amt:number,per:number};
Approved:number;

}
const QAs: qa[] = [
  {
    OUName: 'acemtest',
    ProjectName: 'ecommerce',
    CloudType: 'AWS',
    TotalAllocation:{amt:1000,per:40},
    Consumption:{amt:20000,per:40},
    NewAllocation:{amt:90000,per:40},
    Approved:1,
  },  {
    OUName: 'acemtest',
    ProjectName: 'ecommerce',
    CloudType: 'Google',
    TotalAllocation:{amt:1000,per:20},
    Consumption:{amt:10000,per:40},
    NewAllocation:{amt:10000,per:40},
    Approved:1,
  },
  {
    OUName: 'acemtest',
    ProjectName: 'ecommerce',
    CloudType: 'AWS',
    TotalAllocation:{amt:3000,per:45},
    Consumption:{amt:45000,per:45},
    NewAllocation:{amt:60000,per:10},
    Approved:1,
  },{
    OUName: 'acemtest',
    ProjectName: 'ecommerce',
    CloudType: 'Azure',
    TotalAllocation:{amt:10000,per:50},
    Consumption:{amt:10000,per:40},
    NewAllocation:{amt:10000,per:10},
    Approved:1,
  }, {
    OUName: 'acemtest',
    ProjectName: 'ecommerce',
    CloudType: 'AWS',
    TotalAllocation:{amt:10000,per:40},
    Consumption:{amt:10000,per:40},
    NewAllocation:{amt:10000,per:40},
    Approved:1,
  }, {
    OUName: 'acemtest',
    ProjectName: 'ecommerce',
    CloudType: 'AWS',
    TotalAllocation:{amt:230000,per:20},
    Consumption:{amt:100000,per:35},
    NewAllocation:{amt:99000,per:45},
    Approved:0,
  }, {
    OUName: 'acemtest',
    ProjectName: 'ecommerce',
    CloudType: 'Azure',
    TotalAllocation:{amt:90000,per:20},
    Consumption:{amt:10000,per:30},
    NewAllocation:{amt:223000,per:50},
    Approved:1,
  }, {
    OUName: 'acemtest',
    ProjectName: 'ecommerce',
    CloudType: 'AWS',
    TotalAllocation:{amt:10000,per:30},
    Consumption:{amt:10000,per:30},
    NewAllocation:{amt:10000,per:40},
    Approved:1,
  }, {
    OUName: 'acmCorporation',
    ProjectName: 'ecommerce',
    CloudType: 'AWS',
    TotalAllocation:{amt:10000,per:20},
    Consumption:{amt:10000,per:40},
    NewAllocation:{amt:10000,per:40},
    Approved:0,
  }, {
    OUName: 'acemtest',
    ProjectName: 'ecommerce',
    CloudType: 'Google',
    TotalAllocation:{amt:12000,per:30},
    Consumption:{amt:10000,per:30},
    NewAllocation:{amt:10000,per:40},
    Approved:0,
  }, {
    OUName: 'acemtest',
    ProjectName: 'ecommerce',
    CloudType: 'AWS',
    TotalAllocation:{amt:10000,per:40},
    Consumption:{amt:10000,per:40},
    NewAllocation:{amt:10800,per:20},
    Approved:1,
  }];
  function search(text: string, pipe: PipeTransform): qa[] {
    return QAs.filter(qa => {
      const term = text.toLowerCase();
      return qa.OUName.toLowerCase().includes(term);
    });
  }
@Component({
  selector: 'quotaallocation',
  templateUrl: './quotaallocation.component.html',
  styleUrls: ['./quotaallocation.component.scss'],
   providers: [NgbModalConfig, NgbModal,DecimalPipe]
})
export class QuotaallocationComponent implements OnInit {
  qas$: Observable<qa[]>;
  filter = new FormControl('');
  page = 1;
  pageSize =1; 
  ngOnInit() {
  }
  constructor(config: NgbModalConfig, private modalService: NgbModal,pipe: DecimalPipe) {
    this.qas$ = this.filter.valueChanges.pipe(
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
}
