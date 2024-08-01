import { Component, OnInit } from '@angular/core';
import { ApiService } from '../services/api.service';
import { Iproduct } from '../models/product.model';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrl: './products.component.css'
})
export class ProductsComponent implements OnInit {

  productList: Iproduct[] = [];

  constructor(private _apiService: ApiService){}


  ngOnInit(): void {
    this._apiService.getProducts().subscribe((data: Iproduct[] | any) => {
      this.productList = data;
    });
  }


}
