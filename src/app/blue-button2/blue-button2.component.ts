import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-blue-button2',
  templateUrl: './blue-button2.component.html',
  styleUrls: ['./blue-button2.component.css']
})
export class BlueButton2Component {
  @Input() buttonName: string = 'Button';
}
