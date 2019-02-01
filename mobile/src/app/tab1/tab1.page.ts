import {AfterViewInit, Component, ViewChild} from '@angular/core';
declare var google;

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page implements AfterViewInit {
	 apiKey = '';
    @ViewChild('map') googleMap;
    mapElement: any;
    map: any;
    mapOptions: any;
    mapCenter = {lat: 11.447948, lng: 122.82954};
    markerOptions: any = {position: null, map: null, title: null};
    marker: any;
  constructor() {
      const script = document.createElement('script');
      script.id = 'googleMap';
      if (this.apiKey) {
          script.src = 'https://maps.googleapis.com/maps/api/js?key=' + this.apiKey;
      } else {
          script.src = 'https://maps.googleapis.com/maps/api/js?key=';
      }
      document.head.appendChild(script);
  }

  ngAfterViewInit(): void {
      this.mapElement = this.googleMap.nativeElement;
      this.mapOptions = {
          center: this.mapCenter,
          zoom: 8
      };

      setTimeout(() => {

        
          this.map = new google.maps.Map(this.mapElement, this.mapOptions);
          
         var locations = [
        
                {
                    "title": "Capsu Pontevedra",
                    "latitude": 11.447948, 
                    "longitude": 122.829540
                },
                {
                    "title": "Capsu Mambusao",
                    "latitude":11.431447, 
                    "longitude": 122.595423
                },
                {
                    "title": "Capsu Main",
                    "latitude": 11.576649, 
                    "longitude": 122.755982
                },
                {
                    "title": "Capsu Burias",
                    "latitude": 11.446373,
                    "longitude": 122.549070
                },
                {
                    "title": "Capsu Dayao",
                    "latitude": 11.589879, 
                    "longitude": 122.730459
                },
                {
                    "title": "Capsu Sigma",
                    "latitude": 11.422859,
                    "longitude":  122.660391
                },
                {
                    "title": "Capsu Tapaz",
                    "latitude": 11.289475,
                    "longitude":  122.537400
                },
                {
                    "title": "Capsu Dumarao",
                    "latitude": 11.244191, 
                    "longitude": 122.677482
                },
                {
                    "title": "Capsu Pilar",
                    "latitude": 11.576963,
                    "longitude":  122.755759
                }
            ];

            for(let location of locations){
                console.log(location.latitude, location.longitude);
                this.markerOptions.position = new google.maps.LatLng(location.latitude, location.longitude);
                this.markerOptions.map = this.map;
                this.markerOptions.title = location.title;
                this.marker = new google.maps.Marker(this.markerOptions);
                //new google.maps.Marker(location.latitude, location.longitude);
            } 
        
          

      }, 2000);

  }
}
