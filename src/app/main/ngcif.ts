import { Directive, ElementRef, Input, OnInit, TemplateRef, ViewContainerRef } from "@angular/core";


@Directive({
    selector: '[cif]',
})
export class CustomNgIf implements OnInit {
    @Input() set cif(val: boolean) {
        if (val) {
            this.vcRef.createEmbeddedView(this.tRef);
        } else {
            this.vcRef.clear();
        }

    };

    constructor(private tRef: TemplateRef<any>, private eRef: ElementRef, private vcRef: ViewContainerRef) {
        console.log(tRef);
        console.log(eRef);
        console.log(vcRef);

    }
    ngOnInit() {
        if (this.cif) {
            this.vcRef.createEmbeddedView(this.tRef);
        } else {
            this.vcRef.clear();
        }
    }
}




