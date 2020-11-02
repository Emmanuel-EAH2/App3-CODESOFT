import { Component, OnInit } from '@angular/core';
import { ProductsService } from 'src/app/services/products.service';

@Component({
  selector: 'app-celulares',
  templateUrl: './celulares.component.html',
  styleUrls: ['./celulares.component.css']
})
export class CelularesComponent implements OnInit {

  constructor(private _Products: ProductsService) { }

  ArrayProductos: any[];

  ngOnInit(): void {
  this.ArrayProductos = this._Products.getProducts();
  }

}
