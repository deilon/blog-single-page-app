import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/Http';
import { AppRoutingModule } from './app-routing.module';
import { ViewUserModule } from './modules/public/view-user/view-user.module';
import { BlogModule } from './modules/public/blog/blog.module';
import { HomeModule } from './modules/public/home/home.module';
import { CoreModule } from './core/core.module';

import { AppComponent } from './app.component';
import { NotFoundComponent } from './layout/not-found/not-found.component';


@NgModule({
   declarations: [
      AppComponent,
      NotFoundComponent
   ],
   imports: [
      BrowserModule,
      HttpClientModule,
      AppRoutingModule,
      BlogModule,
      ViewUserModule,
      HomeModule,
      CoreModule
   ],
   bootstrap: [
      AppComponent
   ]
})
export class AppModule { }
