import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs';
import { Post } from 'src/app/models/post.model';
import { PostsService } from 'src/app/services/posts.service';

@Component({
  selector: 'app-list-post',
  templateUrl: './list-post.component.html',
  styleUrls: ['./list-post.component.scss']
})
export class ListPostComponent implements OnInit, OnDestroy {

  posts: Post[] = [];

  postSubcription: Subscription;

  constructor(private postService: PostsService) { }

  ngOnInit() {
    this.postSubcription = this.postService.postsSubject.subscribe(
      (posts: Post[]) => {
        this.posts = posts;

      }
    );
    this.postService.getPosts();
    console.log("hoooo");
    this.postService.emitPosts();
  }
  ngOnDestroy() {
    this.postSubcription.unsubscribe();
  }

}
