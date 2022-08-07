import { Component, ElementRef, Input, OnInit } from '@angular/core';
import { BlockableUI } from 'primeng/api/blockableui';

@Component({
    selector: 'blockable-div',
    templateUrl: './blockable-div.component.html',
    styleUrls: ['./blockable-div.component.css']
})
export class BlockableDivComponent implements OnInit, BlockableUI{

    @Input() style: any;
    @Input() class: any;

    constructor(private elementRef: ElementRef) { }
    
    ngOnInit(): void {
    }

    getBlockableElement(): HTMLElement {
        return this.elementRef.nativeElement.children[0];
    }
}
