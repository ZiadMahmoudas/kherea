import { Component } from '@angular/core';
import { OpinionComponent } from "./opinion/opinion.component";
import { VideosComponent } from "./videos/videos.component";
import { AlbumComponent } from "./album/album.component";
import { MarketComponent } from "./market/market.component";
import { HeaderComponent } from "./header/header.component";

@Component({
    selector: 'app-home',
    templateUrl: './home.component.html',
    styleUrls: ['./home.component.scss'],
    imports: [
      OpinionComponent
      , VideosComponent,
       AlbumComponent,
       MarketComponent,
        HeaderComponent
      ],
})
export class HomeComponent {

}
