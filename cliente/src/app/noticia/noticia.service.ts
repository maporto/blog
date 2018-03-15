import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';

import { Noticia } from './noticia.model';

@Injectable()
export class NoticiaService {

  private _Url = 'noticias';
  
  constructor(private _http: HttpClient) { }
  
  getNoticias(): Observable<Noticia[]> {
      return this._http.get<Noticia[]>(this._Url);
  }
  
  getNoticia(id:Number): Observable<Noticia> {
      return this._http.get<Noticia>(this._Url + `/${id}`);
  }
}