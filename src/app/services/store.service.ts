import { Injectable } from '@angular/core';
import { HttpClient , HttpHeaders} from '@angular/common/http';
import { environment } from '../../environments/environment';
import { tap, catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class StoreService {
  url = environment.url;
  constructor( private http: HttpClient) { }
  getstores() {
      return this.http.get(`${this.url}/api/StoresApi`).pipe(
      catchError(e => {      
        throw new Error(e);
      })
    );
  }
}
