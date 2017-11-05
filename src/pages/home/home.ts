import { Component } from '@angular/core';
import {IonicPage, NavController} from 'ionic-angular';
import {DataProvider} from "../../providers/data/data";

@IonicPage()
@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {


  categoryList:any;
  constructor(public navCtrl: NavController, public dataService: DataProvider) {

  }

  ionViewDidLoad() {
    this.categoryList = this.dataService.categoryLists
  }

  itemOnClick(item):void {
    this.navCtrl.push('DescriptionPage', item)
}

}
