import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Product, productList } from '../products/products.mock';
import { filter } from 'rxjs';

@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrl: './product-detail.component.css'
})
export class ProductDetailComponent implements OnInit {

  producto?: Product;
  productList: Product[] = productList;
  loading: boolean = true;


  constructor(private _route: ActivatedRoute){

  }

  ngOnInit(): void {
    this._route.params.subscribe( param => {
      setTimeout(()=> {
        this.producto = this.productList.find( item => item.id == param['productId']);
        this.loading = false;
      }, 1500)
    });
  }

}
