import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {


  images = [1, 2, 3].map(() => `https://picsum.photos/1200/800?random&t=${Math.random()}`);

  constructor(
    private router: Router
  ) { }

  ngOnInit() {
  }

  enter() {

    this.router.navigate(['business/basic-info']);
  }
}
