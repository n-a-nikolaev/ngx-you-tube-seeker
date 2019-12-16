import {
  Component,
  OnInit,
  ElementRef,
  Output,
  EventEmitter,
  OnDestroy
} from '@angular/core';
import { fromEvent, Subscription } from 'rxjs';
import { map, debounceTime } from 'rxjs/operators';

@Component({
  selector: 'app-search-field',
  templateUrl: './search-field.component.html',
  styleUrls: ['./search-field.component.scss']
})
export class SearchFieldComponent implements OnInit, OnDestroy {
  @Output()
  public query: EventEmitter<string> = new EventEmitter<string>();

  public querySubs: Subscription;

  constructor(
    private el: ElementRef,
  ) { }

  public ngOnInit(): void {
    this.querySubs = fromEvent(this.el.nativeElement, 'keyup')
      .pipe(map((e: any) => e.target.value))
      .pipe(debounceTime(500))
      .subscribe((query: string) => {
        this.query.emit(query)
      });
  }

  public ngOnDestroy(): void {
    if (this.querySubs) {
      this.querySubs.unsubscribe();
    }
  }
}
