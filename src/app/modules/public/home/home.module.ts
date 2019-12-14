import { NgModule } from '@angular/core';
import { HomeRoutingModule } from './home-routing.module';
import { CommonModule } from '@angular/common';
import { SharedModule } from 'src/app/shared/shared.module';

import { HomeComponent } from './home.component';
import { AboutComponent } from './about/about.component';
import { FooterComponent } from './footer/footer.component';
import { SelectionComponent } from './selection/selection.component';
import { ShoppingComponent } from './shopping/shopping.component';
import { ShowcaseComponent } from './showcase/showcase.component';

@NgModule({
    declarations: [
        HomeComponent,
        AboutComponent,
        FooterComponent,
        SelectionComponent,
        ShoppingComponent,
        ShowcaseComponent
    ],
    imports: [
        CommonModule,
        HomeRoutingModule,
        SharedModule
    ]
})
export class HomeModule { }