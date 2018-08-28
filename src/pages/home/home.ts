import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { HttpClient } from '@angular/common/http';
import { RedditDataProvider } from '../../providers/reddit-data/reddit-data';
import { ArticlePage } from '../article/article';
import { Storage } from '@ionic/storage';
import 'rxjs/add/operator/map';


@Component({
  selector: 'page-home',
  templateUrl: 'home.html',
})

export class HomePage {

  public items:any;
  public results:any;
  //public storage: any;

  constructor(public navCtrl: NavController, public http: HttpClient, public redditService: RedditDataProvider, public storage: Storage) {
    console.log("home");

    this.storage.set('age', 10);

    // Or to get a key/value pair
    this.storage.get('age').then((val) => {
      console.log('Your age is', val);
    });

}

ionViewDidLoad() {
  console.log('ionViewDidLoad HomePage');
  this.getRemoteDataPromise();

}

  storeDataToDatabase(){
    this.storage.set('age', 15);
    this.storage.set('database', this.results);

  }

  alertmessage(){
    alert("hey");
  }

  searchAndReturnLead(elements){

    return  elements.filter(function(element) {
      return element.name === "intro";
  });

  }

    getRemoteData(){
      let data: any;
      data = this.http.get('http://localhost:3000/getjson');
      data.subscribe(result => {
        this.results = result["application"]
        console.log(result["application"]);
        this.storage.set('database', this.results);
      })
      }

      getRemoteDataPromise(){
        let data: any;
        data = this.http.get('http://localhost:3000/getjson');
        data.subscribe(result => {
          this.results = result["application"]
          console.log(result["application"]);
          this.storage.set('database', this.results);
          this.items = this.results;
        })


        return new Promise((resolve, reject) => {
          let data: any;
          data = this.http.get('http://localhost:3000/getjson');
          data.subscribe(result => {
            this.results = result["application"]
            resolve (this.results);
          })
          });
        }


    getItems(searchTerm){
      console.log(searchTerm);
      this.results = this.items.filter(item => item.title.includes(searchTerm));

  }

  viewArticle(article){

    this.storage.get('database').then((val) => {
      console.log(val);
    });

    this.navCtrl.push(ArticlePage, {
      title: article
    });
  }

}
