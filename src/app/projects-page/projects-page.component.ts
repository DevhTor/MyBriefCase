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
  data: any[] = [];

  constructor(private apiService: ApiService, private dialog:Dialog) { }

  ngOnInit() {
    this.FillData();
  }

  FillData() {
    this.apiService.getProjects().subscribe(data => {
      this.data = data;
      console.log(this.data);
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
