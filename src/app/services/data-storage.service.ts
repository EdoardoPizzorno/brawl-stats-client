import { Injectable } from '@angular/core';
import _axios from "axios";

@Injectable({
  providedIn: 'root'
})
export class DataStorageService {
  private REST_API_SERVER = "https://brawl-stats-server.onrender.com/api";

  constructor() {
    _axios.interceptors.response.use((response: any) => {
      let token = response.headers["authorization"];
      localStorage.setItem("BRAWL_STATS_TOKEN", token);
      return response;
    });

    _axios.interceptors.request.use((config: any) => {
      let token = localStorage.getItem("BRAWL_STATS_TOKEN");
      if (token) {
        if (token === "undefined") {
          localStorage.removeItem("BRAWL_STATS_TOKEN");
        } else {
          config.headers["authorization"] = token;
        }
      }
      return config;
    });
  }

  public sendRequest(method: string, resource: string, params: any = {}): Promise<any> {
    resource = this.REST_API_SERVER + resource;

    switch (method.toUpperCase()) {
      case 'GET':
        return _axios.get(resource, { params });
      case 'POST':
        return _axios.post(resource, { "body": params });
      case 'PATCH':
        return _axios.patch(resource, { "body": params });
      case 'PUT':
        return _axios.put(resource, params);
      case 'DELETE':
        return _axios.delete(resource);
      default:
        return _axios.get(resource);
    }
  }
}