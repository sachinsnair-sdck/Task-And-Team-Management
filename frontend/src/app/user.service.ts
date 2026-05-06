import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root' // This makes the service a Singleton available everywhere
})
export class UserService {
  // Use the prefix you'll set in your Nginx config
  private apiUrl = '/myapi/users'; 

  constructor(private http: HttpClient) { }

  // Returns an Observable stream of user arrays
  getUsers(): Observable<any[]> {
    return this.http.get<any[]>(this.apiUrl);
  }
}