import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { BsDropdownModule } from 'ngx-bootstrap';

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
        RouterModule,
        BsDropdownModule.forRoot()
    ],
    exports: [
        CommonModule,
        CoverComponent,
        NavComponent,
        DialogComponent,
        BsDropdownModule
    ]
})
export class SharedModule { }