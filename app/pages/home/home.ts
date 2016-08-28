import { Component } from '@angular/core';
import { GitHub } from '../../providers/git-hub/git-hub';
import {NavController} from 'ionic-angular';
import {DetailsPage} from '../details/details';

@Component({
    templateUrl: 'build/pages/home/home.html',
    providers: [GitHub]
})
export class HomePage {

    public foundRepos;
    public username;
    constructor(private github: GitHub, private nav: NavController) {
    }

    

    getRepos() {
        this.github.getRepos(this.username).subscribe(
            data => {
                this.foundRepos = data.json();
            },
            err => console.log(err),
            () => console.log('getRepos completed')
        );

    }

    goToDetails(repo) {
        this.nav.push(DetailsPage, { repo: repo });
    }
}
