import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ListComponent } from './list/list.component';
import { SelectComponent } from './select/select.component';
import { UserLoginComponent } from './user-login/user-login.component';

@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    ListComponent,
    SelectComponent,
    UserLoginComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
