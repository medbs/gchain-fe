import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { map, catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class ChainService {
  constructor(private httpClient: HttpClient) {}

  getDataFromLedger(): Observable<string> {
    return this.httpClient.get('"http://localhost:8090/api/v1/ledger"').pipe(
      map((body: any) => body.value),
      catchError(() => of('Error, could not load joke :-('))
    );
  }
}
