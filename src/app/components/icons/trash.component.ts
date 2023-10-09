import { Component, Input } from "@angular/core";

@Component({
    selector: "trash-icon",
    template: `
    <svg [attr.height]="size" [attr.width]="size" viewBox="0 0 24 24" [style.fill]="color" style="transform: ;msFilter:;"><path d="M6 7H5v13a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V7H6zm10.618-3L15 2H9L7.382 4H3v2h18V4z"></path></svg>
    `
})
export class TrashIconComponent {
    @Input() color!: string
    @Input() size: number = 24
}