import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';

import { CoverComponent } from './cover/cover.component'; 
import { NavComponent } from './nav/nav.component';
import { DialogComponent } from './dialog/dialog.component';

@NgModule({
    declarations: [
        DialogComponent,
        CoverComponent,
        NavComponent
    ], 
    imports: [
        CommonModule,
        RouterModule
    ],
    exports: [
        CommonModule,
        CoverComponent,
        NavComponent,
        DialogComponent,
    ]
})
export class SharedModule { }