import { Component, OnInit } from '@angular/core';
import { LinksService } from '../Services/links.service';
import { link } from '../Services/types/link';

@Component({
  selector: 'linksNavBar',
  templateUrl: '../View/nav-bar.component.html',
  styleUrls: ['../View/styles/nav-bar.component.css']
})
export class NavBarComponent implements OnInit {
  public links: link[] = []

  constructor(private _linksService: LinksService) { }

  ngOnInit(): void {
    this._linksService.getLinks().subscribe(list => (this.links = list))
  }

}
