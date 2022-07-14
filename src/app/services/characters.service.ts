import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http' ;
import { APIURL } from '../../environments/RyMAPI';
@Injectable({
  providedIn: 'root'
})
export class CharactersService {

  constructor(
    private http: HttpClient
  ) { }

  getCharacters() {
    return this.http.get(APIURL.characters);
  }
}
