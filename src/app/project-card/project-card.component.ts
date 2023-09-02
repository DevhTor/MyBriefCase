import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-project-card',
  templateUrl: './project-card.component.html',
  styleUrls: ['./project-card.component.css']
})
export class ProjectCardComponent {
  @Input() imageUrl: string = "";
  @Input() gifUrl: string = "";
  @Input() title: string = "";
  @Input() backgroundColor: string = "";

  isHovered:boolean = false;

  toggleHover() {
    this.isHovered = !this.isHovered;
  }
}
