import { Component, OnInit } from '@angular/core';
import { NgbModalConfig, NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { DecimalPipe } from '@angular/common';
import { FormControl } from '@angular/forms';
import { MatTabChangeEvent } from '@angular/material';
@Component({
  selector: 'subscription',
  templateUrl: './subscription.component.html',
  styleUrls: ['./subscription.component.scss'],
  providers: [NgbModalConfig, NgbModal,DecimalPipe]
})
export class SubscriptionComponent implements OnInit {
  filter = new FormControl('');
  tabvalue='AWS';
  ngOnInit() {
  }
  constructor(config: NgbModalConfig, private modalService: NgbModal,pipe: DecimalPipe) {
    
    config.backdrop = 'static';
    config.keyboard = false;
                              
  }

  onLinkClick(event: MatTabChangeEvent) {
    console.log('event => ', event);
    console.log('index => ', event.index);
    console.log('tab => ', event.tab.textLabel);
    this.tabvalue=event.tab.textLabel;
  }
  addsub(content) {
    this.modalService.open(content,{  backdrop: 'static' });
  }
}
