import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import {GitHub} from '../../providers/git-hub/git-hub';

/*
  Generated class for the DetailsPage page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  templateUrl: 'build/pages/details/details.html',
  providers: [GitHub]
})
export class DetailsPage {

  public readme = '';
  public repo;

  constructor(private nav: NavController,
    private github: GitHub,
    private navParams: NavParams) {
    this.repo = navParams.get('repo');

    this.github.getDetails(this.repo).subscribe(
      data => this.readme = data.text(),
      err => {
        if (err.status = 404) {
          this.readme = 'This repo does not has readme';
        } else {
          console.error(err);
        }
      },
      () => console.log('getDetails completed')
    );
  }

}


