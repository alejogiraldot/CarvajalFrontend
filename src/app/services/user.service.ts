import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {HistoricalUrl, desiredListUrl, productUrl, usersUrl} from './helper';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class productService {


    constructor(private httpClient: HttpClient) { }

    public desiredList(userid:any){
      return this.httpClient.get(`${desiredListUrl}/desiredList/search/`+ userid);
    }
    public saveDesiredList(desiredList:any){
      return this.httpClient.post(`${desiredListUrl}/desiredList/save`,desiredList);
    }
    public findProductById(id:any){
      return this.httpClient.get(`${productUrl}/product/findById/`+ id);
    }
    public searchProduct(){
      return this.httpClient.get(`${productUrl}/product/findAll`);
    }
    public deleteDesiredList(id:any){
      return this.httpClient.delete(`${desiredListUrl}/desiredList/delete/`+id);
    }
    public saveUser(user: any): Observable<any> {
      return this.httpClient.post(`${usersUrl}/users/save`,user);
    }
    public saveHistorical(historical: any){
      return this.httpClient.post(`${HistoricalUrl}/Historico/save`,historical);
    }
    public searchHistorical(userId: any){
      return this.httpClient.get(`${HistoricalUrl}/Historico/search/`+userId);
    } 
    public searchDesiredListById(productId: any){
      return this.httpClient.get(`${desiredListUrl}/desiredList/findById/`+productId);
    } 

}