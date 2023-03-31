import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Grid } from '../grid';
import { GridConfiguration } from '../grid-configuration';

@Component({
  selector: 'app-grid-configuration-form',
  templateUrl: './grid-configuration-form.component.html',
  styleUrls: ['./grid-configuration-form.component.css']
})
export class GridConfigurationFormComponent implements OnInit {

  gridConfiguration: GridConfiguration;
  
  constructor(
    private router: Router
  ) {}

  ngOnInit() {
    this.gridConfiguration = new GridConfiguration(10);
  }

  onSubmit() {
    this.router.navigate(['/grid-view'], {queryParams: this.gridConfiguration})
  }
}
