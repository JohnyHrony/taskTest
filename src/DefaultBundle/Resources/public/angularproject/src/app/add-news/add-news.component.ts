import { Component, OnInit } from '@angular/core';
import {AddNewsService} from '../services/addNews.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add-news',
  templateUrl: './add-news.component.html',
  styleUrls: ['./add-news.component.css'],
  providers:[AddNewsService]
})
export class AddNewsComponent{

  AddNewsForm;

  constructor(private addNewsService:AddNewsService,
    private router: Router
  ) {

    this.AddNewsForm = {
      title: '',
      body: ''
    };
  }
  

  addNews(){
    this.addNewsService.addPost(this.AddNewsForm)
      .subscribe(
        res => {this.router.navigate(['news']);},
        error => console.error(error)
      );


    event.preventDefault();
  }


}
