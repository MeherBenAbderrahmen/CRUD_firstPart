import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-articles',
  templateUrl: './articles.component.html',
  styleUrls: ['./articles.component.css']
})
export class ArticlesComponent implements OnInit {
  users = JSON.parse(localStorage.getItem('registration') || '[]');
  
  constructor() { }
  
  ngOnInit(): void {
  }
  
  supprimerArticle(nb: any){
    this.users.splice(nb,1);
    localStorage.setItem('registration', JSON.stringify(this.users));
  }
}
