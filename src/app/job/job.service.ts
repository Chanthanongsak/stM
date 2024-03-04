import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class JobService {
  private url = environment.apiUrl;

  constructor(private httpClient: HttpClient) { }

  findAllJob(){
    return this.httpClient.get(`${this.url}/work`)
  }

  createApplyWork(data:any){
    return this.httpClient.post(`${this.url}/apply-work`,data)
  }
}
