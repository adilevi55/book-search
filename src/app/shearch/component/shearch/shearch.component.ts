import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';

@Component({
  selector: 'app-shearch',
  templateUrl: './shearch.component.html',
  styleUrls: ['./shearch.component.css']
})
export class ShearchComponent implements OnInit {
usersName: string;
  constructor(private route: ActivatedRoute) { }

  ngOnInit() {
    this.route.params.subscribe((params: Params) => {
     this.usersName = params.userName;
    });
  }

}
