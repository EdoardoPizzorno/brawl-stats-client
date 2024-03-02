import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DataStorageService {
  private REST_API_SERVER = "http://localhost:3000/api";

  constructor(private httpClient: HttpClient) { }

  public sendRequest(method: string, resource: string, params: any = {}): Observable<any> {
    resource = this.REST_API_SERVER + resource;

    switch (method.toUpperCase()) {
      case 'GET':
        return this.httpClient.get(resource, { params });
      case 'POST':
        return this.httpClient.post(resource, { "body": params });
      case 'PATCH':
        return this.httpClient.patch(resource, { "body": params });
      case 'PUT':
        return this.httpClient.put(resource, params);
      case 'DELETE':
        return this.httpClient.delete(resource);
      default:
        return this.httpClient.get(resource);
    }
  }
}