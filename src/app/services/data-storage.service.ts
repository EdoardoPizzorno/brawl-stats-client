import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { _token } from './env';

@Injectable({
  providedIn: 'root'
})
export class DataStorageService {
  private REST_API_SERVER = "https://developer.brawlstars.com/api";

  constructor(private httpClient: HttpClient) { }

  public sendRequest(method: string, resource: string, params: any = {}): Observable<any> {
    resource = this.REST_API_SERVER + resource;
    const headers = new HttpHeaders()
    headers.set('Authorization', _token.token);
    headers.set('Access-Control-Expose-Headers', 'Authorization');
    headers.set('Access-Control-Allow-Origin', '*')

    switch (method.toUpperCase()) {
      case 'GET':
        return this.httpClient.get(resource, { headers, params });
      case 'POST':
        return this.httpClient.post(resource, { "body": params }, { headers });
      case 'PATCH':
        return this.httpClient.patch(resource, { "body": params }, { headers });
      case 'PUT':
        return this.httpClient.put(resource, params, { headers });
      case 'DELETE':
        return this.httpClient.delete(resource, { headers });
      default:
        return this.httpClient.get(resource, { headers });
    }
  }
}