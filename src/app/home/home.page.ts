import { Component } from '@angular/core';
import { HomeService } from "./home.service";
import { a } from '@angular/core/navigation_types.d-u4EOrrdZ';

/*
interface AuthorInfo{
  aName: string
  aBirth: number
}*/

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
  standalone: false,
})

export class HomePage {
  pNum: number = 37;
  qNum: number = 41;
  pList: number[] = [];
  qList: number[] = [];
  nNum: number = 0;
  fiNum: number = 0;
  eNum: number = 0;
  eList: number[] = [];
  dNum: number = 0;
  dList: number[] = [];
  max: number = 0;
  
  

  constructor() {
    this.updateLists();
  }

  primeNumbers(value: number): number[] {
    const res: number[] = Array.from({ length: value + 1 }, (_, i) => i);
    res[0] = res[1] = 0;
    let i = 2;
    while (i <= value) {
      if (res[i] !== 0) {
        let j = i * i;
        while (j <= value) {
          res[j] = 0;
          j += i;
        }
      }
      i += 1;
    }
    return res.filter(num => num >= 34) as number[];
  }

  GCD(a: number, b: number): number {
    while (a !== 0 && b !== 0) {
        if (a > b) {
            a = a % b;
        } else {
            b = b % a;
        }
    }
    return a + b;
  }


  updateLists(): void {
    const primes = this.primeNumbers(100);
    this.pList = primes.filter(num => num !== this.qNum);
    this.qList = primes.filter(num => num !== this.pNum);
    this.nNum = this.pNum*this.qNum;
    this.fiNum = (this.pNum-1)*(this.qNum-1);

    if(this.eList.length !== 0) this.eList.splice(0, this.eList.length)

    for(let i=0; i !== this.fiNum; i++){
      if(this.GCD(i,this.fiNum)==1){
        this.eList.push(i);
      }
    }

    if(this.pNum>this.qNum){
      this.max = this.pNum;
    }else{
      this.max = this.qNum;
    }

    if(this.dList.length !== 0) this.dList.splice(0, this.dList.length)
    for(let i=0; i!== this.max**3; i++){
      if((i*this.eNum)%this.fiNum == 1){
        this.dList.push(i);
      }
    } 
  }
  


  /*
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
*/
}
