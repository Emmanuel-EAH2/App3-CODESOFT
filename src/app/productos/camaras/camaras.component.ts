import { Component, OnInit } from '@angular/core';
import { ProductsService } from 'src/app/services/products.service';

@Component({
  selector: 'app-camaras',
  templateUrl: './camaras.component.html',
  styleUrls: ['./camaras.component.css']
})
export class CamarasComponent implements OnInit {

nombre="Emmanuel Amezquita Hernandez";
mostrar = true;

  constructor(private _Products: ProductsService) { }
  
  ArrayProductos: any[];

  ngOnInit(): void {

    this.ArrayProductos = this._Products.getProducts();
  }

}
