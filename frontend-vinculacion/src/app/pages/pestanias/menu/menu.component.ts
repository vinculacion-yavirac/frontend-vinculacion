import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Menu } from '../../../models/pestanias/menu';
import { MenuService } from '../../../service/pestanias/menu/menu.service';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class  MenuComponent implements OnInit {

  constructor(
    private  menuService:  MenuService,
    private activatedRoute: ActivatedRoute
  ) { }

  menu: Menu[] = [];

  ngOnInit(): void {
    this.findAll();
  }


  public findAll():void {
    this.menuService.findAll().subscribe(
      (response) => {
        this.menu = response;
      }
    )
  }

}
