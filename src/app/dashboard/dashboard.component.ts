import { InfoService } from './../info.service';
import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { BehaviorSubject } from 'rxjs';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {

  search = new FormControl('');
  userData = new BehaviorSubject<any>(null);
  constructor(
    private infoService: InfoService
  ) { }

  ngOnInit(): void {
  }

  searchData() {
    this.infoService.getImgData(this.search.value, 5).subscribe(responseData => {
      this.userData.next(responseData.data);
      this.search.patchValue('');
    });
  }

}
