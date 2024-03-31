import { Component, Input, OnChanges } from '@angular/core';

@Component({
  selector: 'app-project-card',
  templateUrl: './project-card.component.html',
  styleUrls: ['./project-card.component.css']
})
export class ProjectCardComponent implements OnChanges{
  @Input() imageUrl: string = "";
  @Input() gifUrl: string = "";
  @Input() title: string = "";
  @Input() description: string = "";
  @Input() tecnology: string = "";
  @Input() backgroundColor: string = "";

  tecnologies: string[] = [];
  prueba: string = "hola";

  ngOnChanges() {
    if (this.tecnology) {
      this.tecnologies = this.tecnology.split("|");
      this.prueba = this.tecnologies[0];
    }
  }
  
  isHovered:boolean = false;

  toggleHover() {
    this.isHovered = !this.isHovered;
  }
}
