import { Component, OnDestroy } from '@angular/core';
import { SearchResult } from './core/models/search-result/search-result';
import { YouTubeSearchService } from './services/you-tube-search.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnDestroy {
  public title: string = 'YouTube Seeker';
  public list: SearchResult[] = [];
  public loading: boolean = false;
  public resultSubs: Subscription;

  constructor(private youtubeService: YouTubeSearchService) { }

  public ngOnDestroy(): void {
    if (this.resultSubs) {
      this.resultSubs.unsubscribe();
    }
  }

  public onQueryChange(newQuery: string): void {
    this.loading = true;
    this.resultSubs = this.youtubeService
      .search(newQuery)
      .subscribe((results: SearchResult[]) => this.list = results)
  }
}
