import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { SoilTest } from '../../models/soil-test';

@Injectable({
  providedIn: 'root'
})
export class SoilTestService {

  baseUrl = '/soiltests';

  constructor(private http: HttpClient) { }

  getMostRecentTests(): Observable<SoilTest[]> {
    const url = this.buildUrl('search', 'findMostRecentBySampleNameForUser');
    return this.http.get<SoilTest[]>(url);
  }

  getTestsForSampleName(sampleName: string): Observable<SoilTest[]> {
    const url = this.buildUrl('search', 'findByUsernameAndSampleName', sampleName);
    return this.http.get<SoilTest[]>(url);
  }

  private buildUrl(...urlSegments: string[]): string {
    return this.baseUrl + '/' + urlSegments.join('/');
  }

}
