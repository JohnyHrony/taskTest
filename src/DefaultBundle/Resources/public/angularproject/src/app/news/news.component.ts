import { Component} from '@angular/core';

import {NewsService} from '../services/news.service';

@Component({
  selector: 'app-news',
  templateUrl: './news.component.html',
  providers:[NewsService]
})
export class NewsComponent {

  news:News[];
  selected:string;
  constructor(private newsService: NewsService) {
    this.newsService.getPosts().subscribe(posts => {
      this.news = posts.slice().reverse();
    });
  }

  singleNews(item){
      this.selected = item['body'];
  }

}

interface News{
  id: number;
  title: string;
  body: string;
}
