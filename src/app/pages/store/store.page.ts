import { Component, OnInit,ViewChild, Renderer2, Input } from '@angular/core';
import { Slides} from 'ionic-angular';
import { ActivatedRoute } from '@angular/router';
@Component({
  selector: 'app-store',
  templateUrl: './store.page.html',
  styleUrls: ['./store.page.scss'],
})
export class StorePage implements OnInit {
  @ViewChild('slider') slider:Slides;
  page="0";
  storeData:any;
  sub:any;
  @Input('header') header:any;
  constructor( public router:ActivatedRoute, public renderer:Renderer2) { }

selectedtab(ind)
{
  this.slider.slideTo(ind);
}
movebuttones($event)
{
  this.page = $event._snapIndex.tostring();
}
logscrolling(event){
  console.log("ragjlslwhlglyrj");
}
scrollstart(header){
  this.header= header.el;
  console.log("fbrkpebpkrp");
}
  ngOnInit() {
    this.sub = this.router.params.subscribe(params => {
      this.storeData = JSON.parse(params['store'] )});
    
  }
pages=[
  {pageName:"BufferingPage",icon:""},
  {pageName:"WoodPage",icon:""},
  {pageName:"PlumpingPage",icon:""},
  {pageName:"BuildingPage",icon:""},
  {pageName:"FramesPage",icon:""},
  {pageName:"DoorsPage",icon:""},
]
}
