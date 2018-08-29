import { Component } from '@angular/core';
import { Hero } from './hero';
import { OnInit } from '@angular/core';

import { HeroService } from './hero.service';



@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css']

})


export class AppComponent  {
    title = 'angular tour of hearoes';
    // constructor(private heroService: HeroService) { };

    // heroes: Hero[];
    // selectedHero: Hero;
    // hero: Hero = {
    // 	id: 1,
    // 	name: 'homem formiga'
    // };

    // getHeroes(): void {
    // 	this.heroService.getHeroes().then(heroes => this.heroes = heroes);
    // }
    // onSelect(hero: Hero): void {
    // 	this.selectedHero = hero;
    // };
    // ngOnInit(): void {
    // 	this.getHeroes();
    // }

}
