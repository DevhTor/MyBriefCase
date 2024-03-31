import { Component, OnInit } from '@angular/core';
import { ApiService } from '../service/api.service';


@Component({
  selector: 'app-projects-page',
  templateUrl: './projects-page.component.html',
  styleUrls: ['./projects-page.component.css']
})
export class ProjectsPageComponent implements OnInit{

  data: any[] = [];

  constructor(private apiService: ApiService) { }

  ngOnInit() {
    this.FillData();
  }

  FillData() {
    this.apiService.getProjects().subscribe(data => {
      this.data = data;
      console.log(this.data);
    })
  }
}
