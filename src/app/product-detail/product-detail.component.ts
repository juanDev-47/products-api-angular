import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { Product, productList } from '../products/products.mock';
import { ApiService } from '../services/api.service';
import { Iproduct } from '../models/product.model';

@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrl: './product-detail.component.css',
})
export class ProductDetailComponent implements OnInit {
  producto?: Iproduct;
  productList: Product[] = [];
  loading: boolean = true;
  isCollapsed = true;

  constructor(
    private _route: ActivatedRoute,
    private _apiService: ApiService
  ) {}

  ngOnInit(): void {
    this._route.params.subscribe({
      next: (params: Params) => {
        this._apiService.getProduct(params['productId']).subscribe({
          next: (data: Iproduct) => {
            this.producto = data;
            this.loading = false;
          },
          error: (error: any) => {
            console.log(error);
            this.loading = false;
          },
        });
      },
    });
  }

  
  toggleCollapse() {
    this.isCollapsed = !this.isCollapsed;
  }

}
