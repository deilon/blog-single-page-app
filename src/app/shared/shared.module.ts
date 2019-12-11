import { NgModule } from '@angular/core';
import { DialogComponent } from './dialog/dialog.component';
import { CommonModule } from '@angular/common';

@NgModule({
    declarations: [
        DialogComponent
    ], 
    exports: [
        CommonModule,
        DialogComponent
    ]
})
export class SharedModule { }