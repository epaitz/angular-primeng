import { Component, Input, OnInit, ViewChild } from '@angular/core';
import { BlockUI } from 'primeng/blockui';

@Component({
    selector: 'blockable-container-div',
    templateUrl: './blockable-container-div.component.html',
    styleUrls: ['./blockable-container-div.component.css']
})
export class BlockableContainerDivComponent implements OnInit {

    @ViewChild('loading', { static: false}) set loadingBlockUI(loadingBlockUI: BlockUI) {
        if (loadingBlockUI != null) {
            loadingBlockUI.blocked = loadingBlockUI.blocked;
        }
    }

    @Input() style: any;
    @Input() class: string;
    @Input() blocked = false;

    constructor() { }

    ngOnInit(): void {
    }

}
