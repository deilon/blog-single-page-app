import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { HttpClientModule } from '@angular/common/Http';
import { EllipsisModule } from 'ngx-ellipsis';

// Components
import { CoverComponent } from './layout/cover/cover.component';
import { HomeComponent } from './public/home/home.component';
import { AppComponent } from './app.component';
import { NavComponent } from './public/home/nav/nav.component';
import { SelectionComponent } from './public/home/selection/selection.component';
import { ShowcaseComponent } from './public/home/showcase/showcase.component';
import { ShoppingComponent } from './public/home/shopping/shopping.component';
import { FooterComponent } from './public/home/footer/footer.component';
import { BlogComponent } from './public/blog/blog.component';
import { ReadComponent } from './public/blog/read/read.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { UserComponent } from './private/user/user.component';
import { ProfileUpdateComponent } from './private/user/profile-update/profile-update.component';
import { ProfileBlogsComponent } from './private/user/profile-blogs/profile-blogs.component';
import { DialogComponent } from './dialog/dialog.component';

// Services
import { BlogService } from './_services/blog.service';
import { UserService } from './_services/user.service';
import { AboutComponent } from './public/home/about/about.component';
import { UserRegistrationComponent } from './auth/user-registration/user-registration.component';
import { UserLoginComponent } from './auth/user-login/user-login.component';
import { DialogService } from './dialog/dialog.service';

// AUTH SERVICES
import { AuthGuard } from './auth/auth-guard.service';
import { AuthService } from './auth/auth.service';
import { ViewUserComponent } from './public/view-user/view-user.component';

@NgModule({
   declarations: [
      AppComponent,
      NavComponent,
      CoverComponent,
      SelectionComponent,
      ShowcaseComponent,
      ShoppingComponent,
      FooterComponent,
      BlogComponent,
      ReadComponent,
      HomeComponent,
      NotFoundComponent,
      UserComponent,
      ProfileUpdateComponent,
      ProfileBlogsComponent,
      AboutComponent,
      UserRegistrationComponent,
      UserLoginComponent,
      DialogComponent,
      ViewUserComponent,
 
   ],
   imports: [
      BrowserModule,
      ReactiveFormsModule,
      HttpClientModule,
      AppRoutingModule,
      EllipsisModule
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
