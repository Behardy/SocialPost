import { Component, } from '@angular/core';
import { Post } from '../post';
@Component({
  selector: 'social',
  templateUrl: './social.component.html',
  styleUrls: ['./social.component.css']
})
export class SocialComponent  {

  show: boolean = false;

  post: Post[] = [
    {
      Title: "Gaara",
      Thought: "this is annoying",
    },
    {
      Title: "Haru",
      Thought: "this is annoying as well",
    },
    {
      Title: "Haru",
      Thought: "this is annoying as well",
    },

  ];
  
  constructor() { }
removePost(index){
  console.log(index);
  
}
onSubmit(post:Post): void{
this.post.unshift(post);


}
 
toggleForm():void{
  this.showForm = !this.showForm;
  
}
}





