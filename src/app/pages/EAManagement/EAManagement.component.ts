import { Component, OnInit } from '@angular/core';
import { NgbModalConfig, NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { DecimalPipe } from '@angular/common';
import { FormControl } from '@angular/forms';
import { MatTabChangeEvent } from '@angular/material';
@Component({
  selector: 'EAManagement',
  templateUrl: './EAManagement.component.html',
  styleUrls: ['./EAManagement.component.scss'],
  providers: [NgbModalConfig, NgbModal,DecimalPipe]
})
export class EAManagementComponent implements OnInit {
  filter = new FormControl('');
  tabvalue='AWS';
  ngOnInit() {
  }
  constructor(config: NgbModalConfig, private modalService: NgbModal,pipe: DecimalPipe) {
    
    config.backdrop = 'static';
    config.keyboard = false;
                              
  }

  onLinkClick(event: MatTabChangeEvent) {
    this.tabvalue=event.tab.textLabel;
  }
  addEA(content) {
    this.modalService.open(content,{  backdrop: 'static' });
  }
  editrow(editcontentView) {
    this.modalService.open(editcontentView,{  backdrop: 'static' });
  }
  viewrow(contentView) {
    this.modalService.open(contentView,{  backdrop: 'static' });
  }
  
}
