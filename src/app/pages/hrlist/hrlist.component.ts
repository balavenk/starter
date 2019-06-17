import { Component, OnInit } from '@angular/core';
import { ApiService } from '../../api.service';
import { Hritem } from '../../models/hritem';
@Component({
  selector: 'hrlist',
  templateUrl: './hrlist.component.html',
  styleUrls: ['./hrlist.component.scss']
})
export class HrlistComponent implements OnInit {

  constructor(private apiService: ApiService) { }
  hrList: Hritem[];
  ngOnInit(){
    console.log("component inited");
    this.apiService.getHrItems().subscribe((res)=>{
      this.hrList = res;
      console.log(JSON.stringify(res));
  });
  }

}
