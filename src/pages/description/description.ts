import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the DescriptionPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-description',
  templateUrl: 'description.html',
})
export class DescriptionPage {

    itemDescription:any;

  constructor(public navCtrl: NavController, public navParams: NavParams) {

    this.itemDescription = this.navParams.data;

  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad DescriptionPage');
  }

}
