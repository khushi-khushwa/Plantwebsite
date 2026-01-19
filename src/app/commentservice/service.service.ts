import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ServiceService {
  listOfNames: string[] = [];
    comments: { text: string; createdAt: string; name:string; userName:string  }[] = []; 
    newComment: string = '';
  constructor() {
    this.loadComments();
   }
  updateTimeAgo(): void {
    this.listOfNames = this.comments.map(element => {
      const createdAt = new Date(element.createdAt);
      const now = new Date();
      const timeDifference = Math.floor((now.getTime() - createdAt.getTime()) / 1000);
  
      if (timeDifference < 60) {
        return `${timeDifference} sec ago`;
      } else if (timeDifference < 3600) {
        return `${Math.floor(timeDifference / 60)} min ago`;
      } else if (timeDifference < 86400) {
        return `${Math.floor(timeDifference / 3600)} hours ago`;
      } else {
        return `${Math.floor(timeDifference / 86400)} days ago`;
      }
    });
  
    console.log(this.listOfNames); 
  }

  loadComments(): void {
    const storedComments = localStorage.getItem('comments');
    this.comments = storedComments ? JSON.parse(storedComments) : [];
       this.updateTimeAgo();
  
  }
comment(text: string): void {
  if (!text.trim()) return;

  const newCommentObj = {
    text,
    createdAt: new Date().toISOString(),
    name: 'T',
    userName: 'Tanish'
  };

  this.comments.push(newCommentObj);
  localStorage.setItem('comments', JSON.stringify(this.comments));

  // 👇 IMPORTANT
  this.updateTimeAgo();
}


  getListOfName(){
    return this.listOfNames
  }
}
