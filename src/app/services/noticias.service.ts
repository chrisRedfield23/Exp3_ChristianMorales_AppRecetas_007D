import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { RespuestaToHeadLines } from '../interfaces/interfaces';

@Injectable({
  providedIn: 'root'
})
export class NoticiasService {

  constructor(private http: HttpClient) { }

  getTopHeadLines()
  { 
    return this.http.get<RespuestaToHeadLines>
    ('https://newsapi.org/v2/everything?q=apple&from=2021-11-16&to=2021-11-16&sortBy=popularity&apiKey=9425517e49aa46d29e1a61625b3e7f24');
  }


}
