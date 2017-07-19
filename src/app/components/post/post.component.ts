import {Component, Input, OnInit} from '@angular/core';
import {AuthService} from "../../services/auth.service";

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.css']
})
export class PostComponent implements OnInit {
@Input()job:object;
  constructor(public auth: AuthService) { }

  ngOnInit() {
  }

}
