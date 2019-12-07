import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { HttpClientModule } from '@angular/common/Http';
import { EllipsisModule } from 'ngx-ellipsis';

// Components
import { CoverComponent } from './layout/cover/cover.component';
import { HomeComponent } from './home/home.component';
import { AppComponent } from './app.component';
import { NavComponent } from './home/nav/nav.component';
import { SelectionComponent } from './home/selection/selection.component';
import { ShowcaseComponent } from './home/showcase/showcase.component';
import { ShoppingComponent } from './home/shopping/shopping.component';
import { FooterComponent } from './home/footer/footer.component';
import { BlogComponent } from './blog/blog.component';
import { ReadComponent } from './blog/read/read.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { UserComponent } from './user/user.component';
import { ProfileUpdateComponent } from './user/profile-update/profile-update.component';
import { ProfileBlogsComponent } from './user/profile-blogs/profile-blogs.component';
import { DialogComponent } from './dialog/dialog.component';

// Services
import { BlogService } from './blog/blog.service';
import { UserService } from './user/user.service';
import { AboutComponent } from './home/about/about.component';
import { UserRegistrationComponent } from './auth/user-registration/user-registration.component';
import { UserLoginComponent } from './auth/user-login/user-login.component';
import { DialogService } from './dialog/dialog.service';

// AUTH SERVICES
import { AuthGuard } from './auth/auth-guard.service';
import { AuthService } from './auth/auth.service';

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
