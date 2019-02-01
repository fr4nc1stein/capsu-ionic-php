import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import { Http, Headers, RequestOptions } from '@angular/http';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-tab3',
  templateUrl: 'tab3.page.html',
  styleUrls: ['tab3.page.scss']
})
export class Tab3Page {

  name: any;
  public infoForm: FormGroup;
  constructor(private route: ActivatedRoute, public formBuilder: FormBuilder, public http: Http, public alertController: AlertController) {
      this.infoForm = this.formBuilder.group({
        'full_name' : [null, Validators.required],
        'campus' : [null, Validators.required],
        'course' : [null, Validators.required],
        'birthday' : [null, Validators.required],
        'address' : [null, Validators.required]
      });
  }

  async presentAlert(data: any) {
    const alert = await this.alertController.create({
      header: 'Success',
      subHeader: '',
      message: data,
      buttons: ['OK']
    });

    await alert.present();
  }

  ionViewWillEnter() {
    const name = this.route.snapshot.paramMap.get('id');
    this.name = name;
  }

  saveInfo() {
    const headers = new Headers();
    headers.append('Accept', 'application/json');
    headers.append('Content-Type', 'application/json' );
    const requestOptions = new RequestOptions({ headers: headers });
    console.log(JSON.stringify(this.infoForm.value));
    this.http.post('http://127.0.0.1/capsu/', JSON.stringify(this.infoForm.value), requestOptions)
    .subscribe(data => {
      const response = data['_body'];
      const jsonResponse = JSON.parse(response);
      if (jsonResponse.success === true) {
        this.presentAlert(jsonResponse.message);
      } else {
        this.presentAlert(jsonResponse.message);
      }
     }, error => {
      console.log(error);
    });
  }
}
