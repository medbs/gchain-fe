import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { map, catchError } from 'rxjs/operators';

export interface Block {
  BPM: number;
  Hash: string;
  Index: string;
  PrevHash: string;
  Timestamp: string;
}

@Injectable({
  providedIn: 'root',
})
export class ChainService {
  baseURL = 'http://localhost:8090/api/v1/ledger';

  constructor(private httpClient: HttpClient) {}

  getDataFromLedger(): Observable<any> {
    return this.httpClient.get(this.baseURL);
  }

  addDataToLedger(record: string) {
    const jsonRecord = JSON.stringify(record);
    const headers = { 'content-type': 'application/json' };
    return this.httpClient
      .post<any>(this.baseURL + '?data=' + jsonRecord, null, { headers })
      .subscribe((data) => {});
  }
}
