import { NgModule } from '@angular/core';

import { HomeComponent } from './home.component';
import { AboutComponent } from './about/about.component';
import { FooterComponent } from './footer/footer.component';
import { NavComponent } from './nav/nav.component';
import { SelectionComponent } from './selection/selection.component';
import { ShoppingComponent } from './shopping/shopping.component';
import { ShowcaseComponent } from './showcase/showcase.component';

@NgModule({
    declarations: [
        HomeComponent,
        AboutComponent,
        FooterComponent,
        NavComponent,
        SelectionComponent,
        ShoppingComponent,
        ShowcaseComponent
    ]
})
export class HomeModule { }