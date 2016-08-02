import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { FORM_DIRECTIVES, REACTIVE_FORM_DIRECTIVES } from '@angular/forms';
import 'rxjs/Rx';

import { DataService } from '../../services/data.service';
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
      title: ['', Validators.required],
      content: ['', Validators.required],
      url: ['', Validators.required]
    });
    this.onGetData();
  }

  onGetData() {
    this._dataService.getAllData()
      .subscribe(
        data => {
          const myArray = [];
          for (let key in data) {
            if (data[key].title != '') {
              data[key].id = key;
              myArray.push(data[key]);
            }
          }
          this.items = myArray;
        }
      );
  }

  onDelete(id) {
    this._dataService.deleteData(id)
      .subscribe(
        () => this.onGetData(),
        error => console.error(error)
      );
  }

  onSaveData() {
    this._dataService.addData(this.myForm.value)
      .subscribe(
        () => this.onGetData(),
        error => console.error(error)
      );
  }

  onClose() {
    this.artSelect = false;
  }

  articleMore(title, content, url) {
    this.articleTitle = title;
    this.articleContent = content;
    this.articleUrl = url;
    this.artSelect = true;
    this.artSelect = true;
  }

}
