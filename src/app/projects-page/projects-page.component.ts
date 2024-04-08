import { Component, OnInit } from '@angular/core';
import { ApiService } from '../service/api.service';
import { Dialog } from '@angular/cdk/dialog';
import { SliderComponent } from '../slider/slider.component';


@Component({
  selector: 'app-projects-page',
  templateUrl: './projects-page.component.html',
  styleUrls: ['./projects-page.component.css']
})
export class ProjectsPageComponent implements OnInit{

  imgRoute: string = '../../../assets/images/';
  allProjectsList: any[] = [];
  favoriteProjectsList: any[] = [];

  constructor(private apiService: ApiService, private dialog:Dialog) { }

  ngOnInit() {
    this.FillProjectsList();
    
  }

  FillProjectsList() {
    this.apiService.getProjects().subscribe(data => {
      this.allProjectsList = data;
      console.log(this.allProjectsList);
      this.favoriteProjectsList = this.allProjectsList.filter
      (project => project.isFavorite == true);
    console.log(this.favoriteProjectsList);
    })    
  }


  public openSlider(): void {
    this.dialog.open(SliderComponent, {
    width: '300px',
    height: '600px'
    //   data: {name: this.name, animal: this.animal}
    });

    console.log('open slider');
  }
}
