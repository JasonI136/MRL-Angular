import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class javacalculatorService {
// URL which returns list of JSON items (API end-point URL)
  private readonly URL = 'http://localhost:8080/';

  constructor(private http: HttpClient) { }

  add(n1: string, n2: string): Observable<any> {
    console.log('Request is sent!');
    // Using the GET method
    const headers =  {
      headers: new  HttpHeaders({ 
        'Content-Type': 'application/x-www-form-urlencoded',
        'Access-Control-Allow-Origin': '*'
      })
    };
    return this.http.get(this.URL + "add?n1="+n1+"&n2="+n2 , headers)
  }

  subtract(n1: string, n2: string): Observable<any> {
    console.log('Request is sent!');
    // Using the GET method
    const headers =  {
      headers: new  HttpHeaders({ 
        'Content-Type': 'application/x-www-form-urlencoded'})
    };
    return this.http.get(this.URL + "subtract?n1="+n1+"&n2="+n2 , headers)
  }

  multiply(n1: string, n2: string): Observable<any> {
    console.log('Request is sent!');
    // Using the GET method
    const headers =  {
      headers: new  HttpHeaders({ 
        'Content-Type': 'application/x-www-form-urlencoded'})
    };
    return this.http.get(this.URL + "multiply?n1="+n1+"&n2="+n2 , headers)
  }

  divide(n1: string, n2: string): Observable<any> {
    console.log('Request is sent!');
    // Using the GET method
    const headers =  {
      headers: new  HttpHeaders({ 
        'Content-Type': 'application/x-www-form-urlencoded'})
    };
    return this.http.get(this.URL + "divide?n1="+n1+"&n2="+n2 , headers)
  }
}