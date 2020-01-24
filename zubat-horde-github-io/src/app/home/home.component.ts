import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  year2020 = '2020';
  year2019 = '2019';
  year2018 = '2018';
  year2017 = '2017';
  year2016 = '2016';
  github = 'github';
  learn = 'learn';
  community = 'community';
  constructor() { }

  ngOnInit() {
  }

  focusMe(id: string) {
    const element = document.getElementById(id);
    element.scrollIntoView({behavior: 'smooth', block: 'center', inline: 'nearest'});
  }
}
