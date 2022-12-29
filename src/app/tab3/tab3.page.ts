import { Component } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-tab3',
  templateUrl: 'tab3.page.html',
  styleUrls: ['tab3.page.scss'],
})
export class Tab3Page {
  constructor(private translateService: TranslateService) {}

  changeLanguage(event: any) {
    this.translateService.use(event.detail.value);
  }
}
