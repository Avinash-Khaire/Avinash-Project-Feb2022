import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import {filter} from 'rxjs/operators'
import { iPhotos } from './photiInterface';

@Injectable({
  providedIn: 'root'
})
export class HttpHandelerService {
public Url:any = 'https://jsonplaceholder.typicode.com/photos';
// public newUrl:any = 'https://jsonplaceholder.typicode.com/photos';
  constructor(public http:HttpClient) { }

  public apicall(p:number,limit?:number){
    let newUrl = `${this.Url}?_page=${p}&_limit=${limit}`;
    console.log(newUrl);
    
    return this.http.get<{[key:number]:iPhotos}>(newUrl)
    .pipe(filter((data:any)=>{
     return data;
     
    }))
  }
}
