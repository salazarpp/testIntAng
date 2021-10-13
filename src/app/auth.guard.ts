import { InfoService } from './info.service';
import { Injectable } from '@angular/core';
import { CanActivate } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {
  constructor(private infoService: InfoService) { }
  canActivate() {
    let status = false;
    if (this.infoService.selectedUser) {
      status = true;
    }
    return status;
  }
  
}
