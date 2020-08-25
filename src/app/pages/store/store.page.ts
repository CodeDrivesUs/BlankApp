import { Component, OnInit,ViewChild, Renderer2, Input } from '@angular/core';
import { Slides} from 'ionic-angular';
import { ActivatedRoute } from '@angular/router';
import { StoreService } from '../../services/store.service';

@Component({
  selector: 'app-store',
  templateUrl: './store.page.html',
  styleUrls: ['./store.page.scss'],
})
export class StorePage implements OnInit {
  @ViewChild('slider') slider:Slides;
  page="0";
  storeData:any;
  responseData:any;
  sub:any;
  Category:any;
  Subcategory:any;
  data:any;
  Product:any;
  @Input('header') header:any;
  @ViewChild('header') header2:any;
  private verticalSlide = {
    initialSlide: 0,
    direction: 'vertical',
    slidesPerView: 1.5,
  }
  constructor( public router:ActivatedRoute, public rendere:Renderer2,private storeservice:StoreService) { }

selectedtab(ind)
{
  this.slider.slideTo(ind);
}
movebuttones(event)
{
  console.log(event._snapIndex);
 // this.page = event._snapIndex;
}
lastX:any;
logscrolling(event){
  if(event.detail.scrollTop>Math.max(0,this.lastX)){
   this.rendere.setStyle(this.header,'margin-top','0px');
     this.rendere.setStyle(this.header,'transition','margin-top 400ms');
    }
 else{
   
     this.rendere.setStyle(this.header,'margin-top',`-${this.header2.clientHeight}px`);
     this.rendere.setStyle(this.header,'transition','margin-top 400ms');
    }
    this.lastX = event.detail.scrollTop;
}
scrollstart(header){
  this.header=header;
 console.log(header.el);
}
Getsubcat(categoryID){
  
  return this.Subcategory.filter(x=>x.CategoryId==categoryID);
}
Getproduct(subID){
  return this.Product.filter(x=>x.SubCategoryId==subID);
}
  ngOnInit() {
    this.sub = this.router.params.subscribe(params => {
      this.storeData = JSON.parse(params['store'] )});
      this.storeservice.getstoredetails(this.storeData.StoreId).subscribe(res=> {
        console.log(res);
        this.responseData= res;
        this.Category = this.responseData.Categories;
        this.Subcategory= this.responseData.SubCategories;
        this.Product =this.responseData.Products;
      }, err => {
        console.log(err);
      }) ;
    
   
    
  }
}
