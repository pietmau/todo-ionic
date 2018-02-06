import {Component} from '@angular/core';
import {NavController} from 'ionic-angular';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  todo = null
  itemsArray = []

  constructor(public navCtrl: NavController) {

  }

  add() {
    if (this.todo != null) {
      this.itemsArray.push(this.todo)
      this.todo = null
    }
  }

  delete(item: String) {
    if (item != null) {
      var index = this.itemsArray.indexOf(item);
      if (index > -1) {
        this.itemsArray.splice(index, 1)
      }
    }
  }
}
