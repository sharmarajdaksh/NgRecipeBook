import { Directive, HostListener, HostBinding, ElementRef, Renderer2, ViewChild } from '@angular/core';

@Directive({
    selector: '[appDropdown]'
})
export class DropdownDirective {

    @HostBinding('class.open') isOpen = false;

    @HostListener('click') toggleOpen() {
        this.isOpen = !this.isOpen;
    }
    constructor() {
    }
}
