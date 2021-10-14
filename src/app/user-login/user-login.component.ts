import { InfoService } from './../info.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-user-login',
  templateUrl: './user-login.component.html',
  styleUrls: ['./user-login.component.scss']
})
export class UserLoginComponent implements OnInit {

  constructor(
    private infoService: InfoService,
    private router: Router
    ) { }

  ngOnInit(): void {
  }

  selectUser(s: number) {
    const users = [
      {usr: 'User1'},
      {usr: 'user2'}
    ];
    this.infoService.selectedUser = users[s];
    this.router.navigate(['']);
  }

}
