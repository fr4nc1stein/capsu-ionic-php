import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { NavController } from '@ionic/angular';
import { TabService } from '../service/tab.service'

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})
export class Tab2Page {
	
	campuses: any;
	event: any
	item: any;
	constructor(private router: Router, private navCtrl: NavController, tabservice : TabService) { 
		this.campuses = [
		  {
				"id": 1,
		  	"title": "Pontevedra",
		  	"description" : "",
		  	"icon" : "information-circle"
		  },
		  {
		  	"title": "Mambusao",
		  	"description" : "",
		  	"icon" : "information-circle"
			},
			{
		  	"title": "Roxas",
		  	"description" : "",
		  	"icon" : "information-circle"
		  },
		  {
		  	"title": "Dayao",
		  	"description" : "",
		  	"icon" : "information-circle"
			},
			{
		  	"title": "Burias",
		  	"description" : "",
		  	"icon" : "information-circle"
		  },
		  {
		  	"title": "Sigma",
		  	"description" : "",
		  	"icon" : "information-circle"
			},
			{
		  	"title": "Pilar",
		  	"description" : "",
		  	"icon" : "information-circle"
		  },
		  {
		  	"title": "Dumarao",
		  	"description" : "",
		  	"icon" : "information-circle"
			},
			{
		  	"title": "Tapaz",
		  	"description" : "",
		  	"icon" : "information-circle"
		  }
        ];
	}

	goto(event) {
		console.log(event);
		// this.router.navigate('/tabs/tab3',{
    //   data: color
    // });
	}
}
