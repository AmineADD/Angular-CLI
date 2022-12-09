import { Component, OnInit } from '@angular/core';
import { LinksService } from '../Services/links.service';
import Link from '../Services/types/Link';

@Component({
  selector: 'linksNavBar',
  templateUrl: '../View/nav-bar.component.html',
  styleUrls: ['./nav-bar.component.css']
})
export class NavBarComponent implements OnInit {
  public links: Link[] = []

  constructor(private _linksService: LinksService) { }

  ngOnInit(): void {
    this._linksService.getLinks().subscribe(list => (this.links = list))
  }

}
