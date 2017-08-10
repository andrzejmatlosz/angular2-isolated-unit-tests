import { UserService } from './user-info/user.service';
import { UserInfoComponent } from './user-info/user-info.component';
import { HeaderComponent } from './header/header.component';
import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent }  from './app.component';

@NgModule({
  imports:      [ BrowserModule ],
  declarations: [ AppComponent, HeaderComponent, UserInfoComponent ],
  bootstrap:    [ AppComponent ],
  providers: [ UserService ]
})
export class AppModule { }
