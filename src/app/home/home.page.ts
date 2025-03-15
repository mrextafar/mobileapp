import { Component } from '@angular/core';

interface AuthorInfo{
  aName: string
  aBirth: number
}

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
  standalone: false,
})
export class HomePage {
  pageName = "Михаил"
  books = ["Пушкин", "Лермонтов", "Блок"]
  authors: AuthorInfo[] = [
    {aName:"Пушкин", aBirth:1799},
    {aName:"Лермонтов", aBirth:1814},
    {aName:"Блок", aBirth:1880},
  ]
  constructor() {}

  btnClick(){
    this.pageName = this.pageName + "!"
  }

}
