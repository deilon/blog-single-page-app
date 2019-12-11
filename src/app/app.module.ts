import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { HttpClientModule } from '@angular/common/Http';
import { EllipsisModule } from 'ngx-ellipsis';

// My Modules
import { ViewUserModule } from './modules/public/view-user/view-user.module';
import { BlogModule } from './modules/public/blog/blog.module';
import { HomeModule } from './modules/public/home/home.module';

// Components
import { CoverComponent } from './layout/cover/cover.component';
import { AppComponent } from './app.component';
import { NotFoundComponent } from './layout/not-found/not-found.component';


// Services
import { BlogService } from './_services/blog.service';
import { UserService } from './_services/user.service';
import { UserRegistrationComponent } from './auth/user-registration/user-registration.component';
import { UserLoginComponent } from './auth/user-login/user-login.component';
import { DialogService } from './shared/dialog/dialog.service';

// AUTH SERVICES
import { AuthGuard } from './auth/auth-guard.service';
import { AuthService } from './auth/auth.service';

@NgModule({
   declarations: [
      AppComponent,
      CoverComponent,
      NotFoundComponent,
      UserRegistrationComponent,
      UserLoginComponent
   ],
   imports: [
      BrowserModule,
      ReactiveFormsModule,
      HttpClientModule,
      AppRoutingModule,
      EllipsisModule,
      BlogModule,
      ViewUserModule,
      HomeModule
   ],
   providers: [
      BlogService,
      AuthGuard,
      AuthService,
      UserService,
      DialogService
   ],
   bootstrap: [
      AppComponent
   ]
})
export class AppModule { }
