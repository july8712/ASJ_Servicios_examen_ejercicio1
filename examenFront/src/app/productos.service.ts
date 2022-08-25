import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Productos } from './productos';

@Injectable({
  providedIn: 'root'
})
export class ProductosService {
  // esta url trae todos los mensajes del backend
  private baseURL = "http://localhost:8080/";
  // httpClient: any;

  constructor(private httpClient : HttpClient) { }

  // Con este método obtengo los usuarios
  obtenerListaDeProductos():Observable<Productos[]>{
    return this.httpClient.get<Productos[]>(`${this.baseURL}producto`);
  }

  //método para guardar una consulta
  registrarProducto(productos:Productos) : Observable<Object>{
    return this.httpClient.post(`${this.baseURL}producto`, productos);
  }
}
