import { Component ,Output, EventEmitter} from '@angular/core';


@Component({
  selector: 'post-form',
  templateUrl: './post-form.component.html',
  styleUrls: ['./post-form.component.css']
})
export class PostFormComponent {
@Output() submitted = new EventEmitter<any>();
  
constructor() { }

onSubmit(form){
this.submitted.emit({
title:form.value.title,
thought: form.value.thought
})
form.resetForm();
}
 
  toggleForm(form): void {
    this.showForm = !this.showForm;

  }
}
