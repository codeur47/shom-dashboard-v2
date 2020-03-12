import { Injectable } from '@angular/core';
import { HttpClient, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(protected http: HttpClient) { }

  /**
   *
   * @description retrieve all the builds of a category
   * @param string url - call url
   */
  getAllBuild(url: string): Observable<HttpResponse<any>> {
    return this.http.get<any>(url);
  }

  /**
   *
   * @description retrieve the id of the last build of a category
   * @param string url - call url
   */
  getLastBuild(url: string): Observable<{ id: string }> {
    return this.http.get<any>(url);
  }

}
