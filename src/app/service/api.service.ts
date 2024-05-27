import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  private url = "https://www.devhtor.somee.com/api/projects";
  constructor(private http: HttpClient) { }

  public getProjects():Observable<any>{
    return this.http.get<any>(this.url);
  }
}
