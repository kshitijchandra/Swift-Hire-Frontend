import {Component, Input, OnInit, Output} from '@angular/core';
import {SearchService} from "../../services/search.service";

@Component({
  selector: 'search-box',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {

  @Output() searchedJobs;

  public searchQuery;
  public category;
  public location;
  public minFees;

  constructor(public searchService: SearchService) {
  }

  ngOnInit() {
  }

  keyPressed(event) {
    if (event.code === "Enter") {
      this.searchService.searchJobs(this.searchQuery, this.category, this.location, this.minFees).subscribe(data => {
        this.searchedJobs = data;
      });
    }
  }

}
