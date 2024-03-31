import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  private url = "http://localhost:5119/api/projects";
  constructor(private http: HttpClient) { }

  public getProjects():Observable<any>{
    return this.http.get<any>(this.url);
  }
}
