import { Injectable } from '@angular/core';
import 'rxjs/add/operator/map';

/*
  Generated class for the DataProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class DataProvider {

  categoryLists:any = [
      {
        listHeader: "Movies",
        listItems: [
            {
                listItemName: "Book of Eli",
                director: "Allen and Albert Hughes",
                playtime: "1h 58m",
                genre: "Action/Thriller"
            },
            {
                listItemName: "Star Wars: The Last Jedi",
                director: "Rian Johnson",
                playtime: "2h 30m",
                genre: "Action/Adventure"
            },
            {
                listItemName: "Thor: Ragnarok",
                director: "Taika Waititi",
                playtime: "2h 10m",
                genre: "Action/Comedy"
            }
        ]
      },
      {
          listHeader: "Songs",
          listItems: [
              {
                  listItemName: "Different Kind of Fine",
                  director: "Zac Brown Band",
                  playtime: "3m 18s",
                  genre: "Country/Rock"
              },
              {
                  listItemName: "Piano Man",
                  director: "Billy Joel",
                  playtime: "4m 30s",
                  genre: "Singer-Songwriter"
              },
              {
                  listItemName: "Lights",
                  director: "Journey",
                  playtime: "3sm 09s",
                  genre: "Rock"
              }
          ]
      }
  ];

  constructor() {
    console.log('Hello DataProvider Provider');
  }

}
