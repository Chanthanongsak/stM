import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ContactService {
  private url = environment.apiUrl
  private secretKey = environment.recaptcha.secretKey

  constructor(private httpClient: HttpClient) { }

  createSendMail(data:any){
    return this.httpClient.post(`${this.url}/send-mail`,data)
  }

  //https://www.google.com/recaptcha/api/siteverify?secret=${secretKey}&response=${token}
  recaptcha(data:any){
    return this.httpClient.get(`https://www.google.com/recaptcha/api/siteverify?secret=${this.secretKey}&response=${data}`)
  }

}
