
import { Proveedor } from './pruebatenica-datos-modelo/proveedor.model';
import { Injectable } from "@angular/core";
import { HttpClient, HttpHeaders, HttpResponse } from "@angular/common/http";
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProveedorServiceService {

  private urlEndPoint: string = 'http://localhost:8080';

  constructor(private http: HttpClient) { }


  public getProveedores(): Promise<any> {

    const url = this.urlEndPoint;
    return this.http.get(`${url}`, this.getOptions()).toPromise();

  }

  private getOptions() {
    return { headers: new HttpHeaders({ "Content-Type": "application/json" }) };
  }

}