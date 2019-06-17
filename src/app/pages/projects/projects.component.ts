import { Component, OnInit ,PipeTransform} from '@angular/core';
import { NgbModalConfig, NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { DecimalPipe } from '@angular/common';
import { FormControl } from '@angular/forms';

import { Observable } from 'rxjs';
import { map, startWith } from 'rxjs/operators';
interface project {
  projectname: string;
  projectDescription: string;
  OU: string;
  Deployedon:String;
  TotalCost:number;
}
const projects: project[] = [
  {
    projectname:'Project 1',
    projectDescription:'This project provides information for student',
    OU:'OU 1',
    Deployedon:'AWS',
    TotalCost:1000000,
  }, {
    projectname:'Project 2',
    projectDescription:'Project Description & Samples',
    OU:'OU 2',
    Deployedon:'AWS',
    TotalCost:100000,
  }];
  function search(text: string, pipe: PipeTransform): project[] {
    return projects.filter(project => {
      const term = text.toLowerCase();
      return project.projectname.toLowerCase().includes(term)
          || pipe.transform(project.OU).includes(term)
          || pipe.transform(project.Deployedon).includes(term);
    });
  }
@Component({
  selector: 'projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.scss'],
  providers: [NgbModalConfig, NgbModal,DecimalPipe]
})
export class ProjectsComponent implements OnInit {
  projects$: Observable<project[]>;
  filter = new FormControl('');
  ngOnInit() {
  }
  constructor(config: NgbModalConfig, private modalService: NgbModal,pipe: DecimalPipe) {
    this.projects$ = this.filter.valueChanges.pipe(
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
  projectadd(content) {
    this.modalService.open(content,{ size: 'lg', backdrop: 'static' });
  }
  projectView(contentView) {
    this.modalService.open(contentView,{ size: 'lg', backdrop: 'static' });
  }
  projectedit(editcontentView) {
    this.modalService.open(editcontentView,{ size: 'lg', backdrop: 'static' });
  }
}
