import { Component, ElementRef, ViewEncapsulation, Input, OnInit, OnDestroy } from '@angular/core';

import { DialogService } from './dialog.service';

@Component({
  selector: 'app-dialog',
  template:      
    `<div class="dialog-modal">
    <div class="dialog-modal-body">
        <ng-content></ng-content>
    </div>
  </div>
  <div class="dialog-modal-background"></div>`,
  styleUrls: ['./dialog.component.less'],
  encapsulation: ViewEncapsulation.None 
})
export class DialogComponent implements OnInit, OnDestroy {

  @Input() id: string;
  private element: any;

  constructor(private dialogService: DialogService, private el: ElementRef) {
      this.element = el.nativeElement;
  }

  ngOnInit(): void {
      let modal = this;

      // ensure id attribute exists
      if (!this.id) {
          console.error('modal must have an id');
          return;
      }

      // move element to bottom of page (just before </body>) so it can be displayed above everything else
      document.body.appendChild(this.element);

      // close modal on background click
      this.element.addEventListener('click', function (e: any) {
          if (e.target.className === 'dialog-modal') {
              modal.close();
          }
      });

      // add self (this modal instance) to the modal service so it's accessible from controllers
      this.dialogService.add(this);
  }

  // remove self from modal service when component is destroyed
  ngOnDestroy(): void {
      this.dialogService.remove(this.id);
      this.element.remove();
  }

  // open modal
  open(): void {
      this.element.style.display = 'block';
      document.body.classList.add('dialog-modal-open');
  }

  // close modal
  close(): void {
      this.element.style.display = 'none';
      document.body.classList.remove('dialog-modal-open');
  }
}
