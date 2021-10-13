import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class InfoService {
  
  startLoading$ = new BehaviorSubject<any>(undefined);
  selectedUser: any;
  constructor() { }
}
