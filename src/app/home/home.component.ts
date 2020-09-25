import { Component, OnInit } from '@angular/core';
import { finalize } from 'rxjs/operators';

import { QuoteService } from './quote.service';
import { Block, ChainService } from '@app/home/chain.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  quote: string | undefined;
  isLoading = false;
  blocks: Block[];

  constructor(
    private quoteService: QuoteService,
    private chainService: ChainService
  ) {}

  ngOnInit() {
    this.isLoading = true;
  }

  getData() {
    this.chainService.getDataFromLedger().subscribe((data) => {
      this.blocks = data;
      console.log(this.blocks);
    });
  }

  addData() {
    this.chainService.addDataToLedger();
  }
}
