import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import 'rxjs/add/operator/do';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
/*
  Generated class for the RedditDataProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class RedditDataProvider {

  public items:any;
  constructor(public http: HttpClient) {
    console.log('Hello RedditDataProvider Provider');
  }

  getRemoteData(){
    let data: any;

    data = this.http.get('https://jsonplaceholder.typicode.com/posts');
    data.subscribe(result => {
       return result
    })

    }


}
