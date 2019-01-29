import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-tab3',
  templateUrl: 'tab3.page.html',
  styleUrls: ['tab3.page.scss']
})
export class Tab3Page {

  name : any;
  constructor(private route: ActivatedRoute){

  }

  ionViewWillEnter(){
    let name = this.route.snapshot.paramMap.get('id');
    this.name = name;
  }
}
