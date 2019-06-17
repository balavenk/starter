import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Hritem } from './models/hritem';
@Injectable({
  providedIn: 'root'
})
export class ApiService {
  apiURL: string = 'https://insight12320190611102240.azurewebsites.net/api';

  constructor(private httpClient: HttpClient) {}

  public getHrItems(){
    return this.httpClient.get<Hritem[]>(`${this.apiURL}/values`);
  }
}
