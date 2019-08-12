import { BrowserModule } from '@angular/platform-browser';
import { NgModule, LOCALE_ID } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SinglePostComponent } from './post/single-post/single-post.component';
import { ListPostComponent } from './post/list-post/list-post.component';
import { FormPostComponent } from './post/form-post/form-post.component';
import { Routes, RouterModule } from '@angular/router';
import { HeaderComponent } from './header/header.component';
import { PostsService } from './services/posts.service';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ModalModule } from './post/_modal';
import localeFr from '@angular/common/locales/fr';
import { registerLocaleData } from '@angular/common';

registerLocaleData(localeFr);



const appRoutes: Routes = [
  {path : 'newpost', component: FormPostComponent},
  {path : 'posts', component: ListPostComponent},
  { path: '', redirectTo: 'posts', pathMatch: 'full' },
  { path: '**', redirectTo: 'posts' }
];


@NgModule({
  declarations: [
    AppComponent,
    SinglePostComponent,
    ListPostComponent,
    FormPostComponent,
    HeaderComponent,


  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    AppRoutingModule,
    RouterModule.forRoot(appRoutes),
    ModalModule
  ],
  providers: [PostsService,
    {provide: LOCALE_ID, useValue: 'fr-FR'}],

  bootstrap: [AppComponent],
  entryComponents: [
  ]
})
export class AppModule { }
