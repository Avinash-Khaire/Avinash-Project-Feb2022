import { Component, OnInit } from '@angular/core';
import { HttpHandelerService } from './shared/http-handeler.service';
import { iPhotos } from './shared/photiInterface';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit{
  title = 'HealthCare';
  p: number = 1;
  public limit:number=20;
  public arr:any= [];
  constructor(public httpHandelerService:HttpHandelerService){}
  ngOnInit(): void {
    this.getApi(this.p,this.limit)
  }
  public getApi(p:number,limit:number){
    this.httpHandelerService.apicall(p,limit).subscribe((data)=>{
      this.arr = data;
      console.log(data)
     
    })
  }
  public paginationHandeler(n:number){
    this.p = n;
    
    this.getApi(n,this.limit)
  }

}
