import { InfoService } from './info.service';
import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {
  constructor(
    private infoService: InfoService,
    private router: Router
    ) { }
  canActivate() {
    let status = false;
    if (this.infoService.selectedUser) {
      status = true;
    } else {
      this.router.navigate(['login']);
    }
    return status;
  }
  
}
