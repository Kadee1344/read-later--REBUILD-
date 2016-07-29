import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { FORM_DIRECTIVES, REACTIVE_FORM_DIRECTIVES } from '@angular/forms';
import { Http, Headers } from '@angular/http';
import 'rxjs/Rx';

import { DataService } from '../../services/data.service.ts';
import { Filter } from '../../pipes/filter.pipe';



@Component({
  moduleId: module.id,
  selector: 'app-read-articles',
  templateUrl: 'read-articles.component.html',
  styleUrls: ['read-articles.component.css'],
  directives: [FORM_DIRECTIVES, REACTIVE_FORM_DIRECTIVES],
  providers: [DataService],
  pipes: [Filter]
})
export class ReadArticlesComponent implements OnInit {

  constructor(private _fb: FormBuilder, private _dataService: DataService) { }

  myForm: FormGroup;
  items: any[] = [];
  artSelect = false;
  articleTitle: string = '';
  articleContent: string = '';
  articleUrl: string = '';
  html: string = '';

  ngOnInit() {
    this.myForm = this._fb.group({
      title: ['']
    })
  }

}
