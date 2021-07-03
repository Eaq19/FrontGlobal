import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class SpotifyService {

  token: 'bOP-ycJHioNwO9QNqCpaREE4jInOjigq7hESRu3NFOa_XWy5tRLPWtacerPcLRTT3ad_Lsyba3fqidxUnbQZ6s1wIge';
  constructor(private http: HttpClient) { }

  getQuery(query: string) {
    const URL = `https://api.spotify.com/v1/${ query }`;
    const HEADERS = new HttpHeaders({
      Authorization: `Bearer ${ this.token }`
    });
    return this.http.get(URL, { headers: HEADERS});
  }

  getNewReleases() {
    return this.getQuery('browse/new-releases?country=CO&limit=20&offset=0').pipe(map((resp: any) => resp.albums.items ));
  }

  getSearchArtist(artist: string) {
    return this.getQuery(`artists/${ artist }`);
  }

  getTopTracks(id: string) {
    return this.getQuery(`artists/${ id }/top-tracks?country=us`).pipe(map((resp: any) => resp.tracks ));
  }
  
  getToken() {
    //const URL = `https://accounts.spotify.com/authorize?client_id=10c42072f1d8404d8b7dd3d57b69debb&response_type=token&redirect_uri=http://localhost:4200/&client_secret=f410fe26607d4e29b7952f8849654d99`;
    //window.location.href = URL;
  }

}
