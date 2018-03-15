import { Component, OnInit } from '@angular/core';
import { NoticiaModel, NoticiaService } from '../noticia/noticia';

@Component({
  selector: 'app-feed',
  templateUrl: './feed.component.html',
  styleUrls: ['./feed.component.css']
})
export class FeedComponent implements OnInit {

  private noticia: NoticiaModel;
  private noticias: NoticiaModel[];

  constructor(private _noticiaService: NoticiaService) {
  }

  ngOnInit() {
    this._noticiaService
      .getNoticias()
      .subscribe(noticias => this.noticias = noticias);
  }

}