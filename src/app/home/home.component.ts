import { Component, OnInit } from '@angular/core';
import { finalize, switchMap } from 'rxjs/operators';

import { QuoteService } from './quote.service';
import { Block, ChainService } from '@app/home/chain.service';
import { FormControl, FormGroup } from '@angular/forms';
import { Subscription, timer } from 'rxjs';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  quote: string | undefined;
  isLoading = false;
  blocks: Block[];
  subscription: Subscription;

  profileForm = new FormGroup({
    record: new FormControl(''),
  });

  constructor(
    private quoteService: QuoteService,
    private chainService: ChainService
  ) {}

  ngOnInit() {
    this.isLoading = true;
    this.subscription = timer(0, 5000)
      .pipe(switchMap(() => this.chainService.getDataFromLedger()))
      .subscribe((data) => (this.blocks = data));
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }

  getData() {
    this.chainService.getDataFromLedger().subscribe((data) => {
      this.blocks = data;
    });
  }

  addData() {
    this.chainService.addDataToLedger(this.profileForm.value);
  }
}
