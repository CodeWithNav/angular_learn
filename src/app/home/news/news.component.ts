import { Component } from '@angular/core';

@Component({
  selector: 'app-news',
  templateUrl: './news.component.html',
  styleUrls: ['./news.component.css']
})
export class NewsComponent {
  newsList : News[] = [];
  authors : Author[] = [
    new Author("DR. M V BHIMESHWAR","President","https://isaweb.in/MemberUploads/MemberPhoto/Dr636314049062415000.jpg"),
    new Author("DR. SUKHMINDER JIT SINGH BAJWA","Honorary Secretary","https://isaweb.in/MemberUploads/MemberPhoto/img382636128399873125000.jpg"),
  ];
  constructor(){
    for(let i = 0;i<20;i++){
      this.newsList.push(new News());
    }
  }
}

class News{
  title:string = "title";
  subtitle:string = "Sub title";
}
class Author{
  name:string
  designation :string
  imageUrl:string
  constructor(name:string,designation:string,imageUrl:string){
    this.name = name;
    this.designation = designation;
    this.imageUrl = imageUrl;
  }
}