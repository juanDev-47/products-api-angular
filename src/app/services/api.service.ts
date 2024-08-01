import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Category, Iproduct } from '../models/product.model';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  baseURL: string = 'https://fakestoreapi.com/products';

  constructor(private _http: HttpClient) {}


  public getProducts(): Observable<Iproduct>{
    return this._http.get<Iproduct>(this.baseURL);
  }

  public getProduct(id: number): Observable<Iproduct>{
    return this._http.get<Iproduct>(`${this.baseURL}/${id}`);
  }

  public postProduct(product: Iproduct): Observable<Iproduct>{
    return this._http.post<Iproduct>(this.baseURL, product);
  }

  public getCategories(): Observable<Category>{
    return this._http.get<Category>(`${this.baseURL}/categories`);
  }

  public getProductsByCategory(category: string): Observable<Iproduct>{
    return this._http.get<Iproduct>(`${this.baseURL}/category/${category}`);
  }

  public updateProducts(id: number, product: Iproduct): Observable<Iproduct>{
    return this._http.put<Iproduct>(`${this.baseURL}/${id}`, product);
  }

  public deleteProduct(id: number): Observable<Iproduct>{
    return this._http.delete<Iproduct>(`${this.baseURL}/${id}`);
  }

}
