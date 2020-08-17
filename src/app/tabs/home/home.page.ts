import { Component, OnInit } from '@angular/core';
import { StoreService } from '../../services/store.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
})
export class HomePage implements OnInit {
date:any;
stores:any;
  constructor( private storeservice:StoreService,  public router:Router) { 
   
  }

  ngOnInit() {
  this.storeservice.getstores().subscribe(res=> {
    console.log(res);
    this.stores= res;
console.log(this.stores);
  }, err => {
    console.log(err);
  }) ;
  }
  store(storedata){
    
    
    this.router.navigate(['store',{store:JSON.stringify(storedata)}])
  }
}
