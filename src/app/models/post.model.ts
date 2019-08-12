export class Post {

  photo: string;
  loveIts: number = 0;
  date = new Date().toISOString();

  constructor(public titre: string, public texte: string){

  }


}
