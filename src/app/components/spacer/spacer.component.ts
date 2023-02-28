import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-spacer',
  templateUrl: './spacer.component.html',
  styleUrls: ['./spacer.component.css']
})
export class SpacerComponent {
  @Input() height!:number;
  @Input() width!:number;

}
