import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { PostsService } from 'src/app/services/posts.service';
import { Post } from 'src/app/models/post.model';


@Component({
  selector: 'app-form-post',
  templateUrl: './form-post.component.html',
  styleUrls: ['./form-post.component.scss']
})

export class FormPostComponent implements OnInit {

  postForm: FormGroup;
  fileIsUploading = false;
  fileUrl: string;
  fileUploaded = false;

  newPost = new Post('', '');

  constructor(private formBuilder: FormBuilder, private postsService: PostsService,
              private router: Router) { }

  ngOnInit() {
    this.initForm();
  }

  initForm() {
    this.postForm = this.formBuilder.group({
      titre: ['', Validators.required],
      texte: ['', Validators.required]
    });
  }

  onSavePost() {
    const titre = this.postForm.get('titre').value;
    const texte = this.postForm.get('texte').value;
    this.newPost.titre = titre;

    this.newPost.texte = texte;
    //this.postsService.createNewPost(this.newPost);

    this.router.navigate(['/posts']);
  }

  detectFiles(event) {
    this.onUploadFile(event.target.files[0]);
  }

  onUploadFile(file: File) {
    this.fileIsUploading = true;
    this.postsService.uploadFile(file).then(
      (url: string) => {
        this.fileUrl = url;
        this.fileIsUploading = false;
        this.fileUploaded = true;

        if (this.fileUrl && this.fileUrl !== '') {
          this.newPost.photo = this.fileUrl;
          console.log("save post ... " + this.fileUrl);
        }
        console.log(this.newPost);
        this.postsService.createNewPost(this.newPost);

      }
    );
}





}
