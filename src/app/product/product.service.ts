import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  private url = environment.apiUrl

  constructor(private httpClient : HttpClient) { }

  findProductBySubCategoryId(sub_id:number | null){
    return this.httpClient.get(`${this.url}/product/Bof?p_cate_sub_id=${sub_id}`)
  }

  findProductById(p_id:number | null){
    return this.httpClient.get(`${this.url}/product/${p_id}`)
  }

  createProductOrder(data:any){
    return this.httpClient.post(`${this.url}/product-order/`,data)
  }
}
