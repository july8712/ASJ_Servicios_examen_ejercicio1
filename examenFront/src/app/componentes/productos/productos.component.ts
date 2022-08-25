import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { ProductosService } from 'src/app/productos.service';
import { Productos } from '../../productos';

@Component({
  selector: 'app-productos',
  templateUrl: './productos.component.html',
  styleUrls: ['./productos.component.css']
})
export class ProductosComponent implements OnInit {

  producto: Productos = new Productos();
  productos: Productos[] = [];

  constructor(private productosServicio: ProductosService, private router:Router) {
  }

  ngOnInit(): void {
    this.obtenerProductos();
  }

  onSubmit(form: NgForm): void {
    console.log('Form values', form );
    this.guardarProducto();
  }

  guardarProducto(){
    this.productosServicio.registrarProducto(this.producto).subscribe(dato => {
      console.log(dato);
      this.obtenerProductos();
    },error => console.log(error));
  }

  private obtenerProductos(){
    this.productosServicio.obtenerListaDeProductos().subscribe(dato => {
      this.productos = dato;
      console.log(this.productos);
    })
  }
}
