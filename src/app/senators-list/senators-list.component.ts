import { HttpClient } from '@angular/common/http';
import { identifierModuleUrl } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';
import { Senators,SenatorsService } from '../senators.service';


@Component({
  selector: 'app-senators-list',
  templateUrl: './senators-list.component.html',
  styleUrls: ['./senators-list.component.css']
})
export class SenatorsListComponent implements OnInit {
  senators: Senators[] = [];

  constructor(public SenatorsService : SenatorsService) { }
  ngOnInit(): void {
    this.SenatorsService.listContacts().subscribe(senator => {
      this.senators = senator;
    })
  }
}
