import {Component, Injectable, OnInit} from '@angular/core';
import { HttpServiceService } from '../http-service.service';
import {Dummy} from '../dummy';

@Component({
  selector: 'app-http',
  templateUrl: './http.component.html',
  styleUrls: ['./http.component.css']
})

@Injectable()
export class HttpComponent implements OnInit {

  dummy: Dummy;


  constructor( private httpService: HttpServiceService) {

  }

  getDummy(): void {
    this.httpService.getDummy().subscribe(dummy => this.dummy = dummy);
  }

  ngOnInit() {
    this.getDummy();
  }



}
