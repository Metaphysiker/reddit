import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Storage } from '@ionic/storage';

/**
 * Generated class for the ArticlePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-article',
  templateUrl: 'article.html',
})
export class ArticlePage {

  title: string;
  lead: string;
  text: string;
  picture: string;
  constructor(public navCtrl: NavController, public navParams: NavParams, public storage: Storage) {
    this.title = this.navParams.get('title');

    this.storage.get('age').then((val) => {
      console.log('Your real age is', val);
    });

    this.storage.get('database').then((val) => {
      var xtitle = this.title
      console.log(xtitle);
      console.log(val);

      var xlead = val.filter(function(item) {
        console.log(item.title === xtitle);
        console.log(xtitle);
        console.log(item.title);
        return item.title == xtitle;
      });

      console.log(typeof xlead);
      console.log(xlead);
      console.log(typeof xlead[0].title);
      this.lead = xlead[0].lead;
      this.text = xlead[0].text;
      this.picture = xlead[0].picture

    });



  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ArticlePage');
  }

}
