import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { SoilTest } from '../../models/soil-test';

@Injectable({
  providedIn: 'root'
})
export class SoilTestService {

  private baseUrl = '/soiltests';

  constructor(private http: HttpClient) { }

  getMostRecentTests(): Observable<SoilTest[]> {
    const url = this.baseUrl + '/mostRecent';
    return this.http.get<SoilTest[]>(url);
  }

  getTestsForSampleName(sampleName: string): Observable<SoilTest[]> {
    return this.http.get<SoilTest[]>(this.baseUrl, { params: { sampleName: sampleName.toUpperCase() }});
  }

}
