import { Component, OnInit, Input } from '@angular/core';
import { PostsService } from 'src/app/services/posts.service';
import { Post } from 'src/app/models/post.model';
import { ModalService } from '../_modal';

@Component({
  selector: 'app-single-post',
  templateUrl: './single-post.component.html',
  styleUrls: ['./single-post.component.scss']
})
export class SinglePostComponent implements OnInit {

  @Input() post: Post;
  @Input() id: number;



  constructor(private postsService: PostsService, private modalService: ModalService) {

  }

  ngOnInit() {
    this.getDate();
  }

  getDate(){

    return new Date(this.post.date);
  }


  getLikeIts() {
    if (this.post) {
      return this.post.loveIts;
    }

  }
  openModal(id: string) {
    this.modalService.open(id);

}

closeModal(id: string) {
    this.modalService.close(id);
}

  onLike() {
    this.post.loveIts++;
    this.postsService.savePosts();

  }

  onBeurk() {
    this.post.loveIts--;
    this.postsService.savePosts();
  }
  onDeleteMe() {
    this.postsService.deletePost(this.post);
  }

}
