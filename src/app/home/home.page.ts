import { Component } from '@angular/core';
import { HomeService } from "./home.service";

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
  authors: AuthorInfo[] = [ ]
  constructor(private data: HomeService) { }
  ngOnInit() {
    this.data.getData().subscribe((response: any) => {
      this.books = response
    })
  }

  btnClick(){
    this.pageName = this.pageName + "!"
  }

}
