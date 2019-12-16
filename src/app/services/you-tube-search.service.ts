import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { SearchResult } from '../core/models/search-result/search-result';
import { HttpClient } from '@angular/common/http';
import { YOUTUBE_API_KEY, YOUTUBE_API_URL } from '../app.config';

@Injectable()
export class YouTubeSearchService {

  constructor(private http: HttpClient) { }

  public search(query: string): Observable<SearchResult[]> {
    const params: string = [
      `q=${query}`,
      `key=${YOUTUBE_API_KEY}`,
      `part=snippet`,
      `type=video`,
      `maxResults=10`
    ].join('&');
    const queryUrl = `${YOUTUBE_API_URL}?${params}`;
    const options = {};

    return this.http
      .get(queryUrl, options)
      .pipe(map((response: any) => {
        if (response && response.items) {
          return <any>response.items.map(this.mapResponseToSearchResult);
        };

        return [];
      }));
  }

  private mapResponseToSearchResult(response: any): SearchResult {
    return new SearchResult({
      id: response.id.videoId,
      title: response.snippet.title,
      description: response.snippet.description,
      thumbnailUrl: response.snippet.thumbnails.high.url
    });
  }
}
