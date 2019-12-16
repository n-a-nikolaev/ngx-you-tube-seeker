import { Component, OnInit, Input } from '@angular/core';
import { SearchResult } from 'src/app/core/models/search-result/search-result';

@Component({
  selector: 'app-youtube-result',
  templateUrl: './youtube-result.component.html',
  styleUrls: ['./youtube-result.component.scss']
})
export class YoutubeResultComponent {
  @Input()
  public result: SearchResult;
}
