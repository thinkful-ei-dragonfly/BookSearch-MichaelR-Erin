import React from 'react';
import './App.css';

import Header from './Header';
import BookList from './BookList';

const API_KEY = 'AIzaSyDQ1v1nWOS3VQALosV4Pn2JPhcjMibUShg';

const data = [{
  "kind": "books#volume",
  "id": "BL7HpqQvU34C",
  "etag": "lV/MG6BSSrs",
  "selfLink": "https://www.googleapis.com/books/v1/volumes/BL7HpqQvU34C",
  "volumeInfo": {
      "title": "Apple Inc",
      "authors": [
          "Jason D. O'Grady"
      ],
      "publisher": "ABC-CLIO",
      "publishedDate": "2009",
      "description": "Assesses Apple's impact on society, technology, processes, and methods; shows how Apple beat the competition in selected markets; details financial results over the years; and, predicts Apple's future prospects and successes. In addition, the author offers special features that include a look at the colourful people associated with Apple, interesting trivia, an Apple time line, a focus on products, and where the company is headed",
      "industryIdentifiers": [
          {
              "type": "ISBN_13",
              "identifier": "9780313362446"
          },
          {
              "type": "ISBN_10",
              "identifier": "0313362440"
          }
      ],
      "readingModes": {
          "text": true,
          "image": true
      },
      "pageCount": 185,
      "printType": "BOOK",
      "categories": [
          "Business & Economics"
      ],
      "averageRating": 4,
      "ratingsCount": 3,
      "maturityRating": "NOT_MATURE",
      "allowAnonLogging": true,
      "contentVersion": "0.0.1.0.preview.3",
      "panelizationSummary": {
          "containsEpubBubbles": false,
          "containsImageBubbles": false
      },
      "imageLinks": {
          "smallThumbnail": "http://books.google.com/books/content?id=BL7HpqQvU34C&printsec=frontcover&img=1&zoom=5&edge=curl&source=gbs_api",
          "thumbnail": "http://books.google.com/books/content?id=BL7HpqQvU34C&printsec=frontcover&img=1&zoom=1&edge=curl&source=gbs_api"
      },
      "language": "en",
      "previewLink": "http://books.google.com/books?id=BL7HpqQvU34C&printsec=frontcover&dq=apple&hl=&cd=4&source=gbs_api",
      "infoLink": "https://play.google.com/store/books/details?id=BL7HpqQvU34C&source=gbs_api",
      "canonicalVolumeLink": "https://market.android.com/details?id=book-BL7HpqQvU34C"
  },
  "saleInfo": {
      "country": "US",
      "saleability": "FOR_SALE",
      "isEbook": true,
      "listPrice": {
          "amount": 45,
          "currencyCode": "USD"
      },
      "retailPrice": {
          "amount": 36,
          "currencyCode": "USD"
      },
      "buyLink": "https://play.google.com/store/books/details?id=BL7HpqQvU34C&rdid=book-BL7HpqQvU34C&rdot=1&source=gbs_api",
      "offers": [
          {
              "finskyOfferType": 1,
              "listPrice": {
                  "amountInMicros": 45000000,
                  "currencyCode": "USD"
              },
              "retailPrice": {
                  "amountInMicros": 36000000,
                  "currencyCode": "USD"
              },
              "giftable": true
          }
      ]
  },
  "accessInfo": {
      "country": "US",
      "viewability": "PARTIAL",
      "embeddable": true,
      "publicDomain": false,
      "textToSpeechPermission": "ALLOWED",
      "epub": {
          "isAvailable": true,
          "acsTokenLink": "http://books.google.com/books/download/Apple_Inc-sample-epub.acsm?id=BL7HpqQvU34C&format=epub&output=acs4_fulfillment_token&dl_type=sample&source=gbs_api"
      },
      "pdf": {
          "isAvailable": true,
          "acsTokenLink": "http://books.google.com/books/download/Apple_Inc-sample-pdf.acsm?id=BL7HpqQvU34C&format=pdf&output=acs4_fulfillment_token&dl_type=sample&source=gbs_api"
      },
      "webReaderLink": "http://play.google.com/books/reader?id=BL7HpqQvU34C&hl=&printsec=frontcover&source=gbs_api",
      "accessViewStatus": "SAMPLE",
      "quoteSharingAllowed": false
  },
  "searchInfo": {
      "textSnippet": "Discusses the founding and success of Apple, examining its historical context, strategies and innovations, influence on society, various technologies, processes, and methods, and competition in various markets, with trivia and a look at the ..."
  }
}];

class App extends React.Component{

  state = {
    books: [],
    printType: 'books',
    filterType: 'free-ebooks',
    error: null,
  }

  // componentDidMount() {
  //   if (this.state.searchTerm) {
  //     const BASE_URL = `https://www.googleapis.com/books/v1/volumes?q=`;
  //     let url = BASE_URL + this.state.searchTerm;
  //     if (this.state.printType) {
  //       url += `&printType=${this.state.printType}`;
  //     }
  //     if (this.state.filterType) {
  //       url += `&filter=${this.state.filterType}`;
  //     }
  //     url += `&key=${API_KEY}`;
  //     console.log(url);
  //     fetch(url)
  //       .then(res => res.json())
  //       .then(res => {
  //         console.log(res);
  //         this.setState({
  //           books: res.items
  //         })
  //       });
  //   }
  // }

  updateSearchTerm = (term) => {
    const BASE_URL = `https://www.googleapis.com/books/v1/volumes?q=`;
    let url = BASE_URL + term;
    if (this.state.printType) {
      url += `&printType=${this.state.printType}`;
    }
    if (this.state.filterType) {
      url += `&filter=${this.state.filterType}`;
    }
    url += `&key=${API_KEY}`;
    console.log(url);
    fetch(url)
      .then(res => res.json())
      .then(res => {
        console.log(res);
        this.setState({
          books: res.items
        })
      });
  }

  updatePrintType = (type) => {
    this.setState({
      printType: type
    });
  }

  updateFilterType = (type) => {
    this.setState({
      filterType: type
    });
  }

  render() {
    // console.log(this.state);

    return (
      <div className="App">
        <header className="App-header">
          <Header updateSearchTerm={this.updateSearchTerm} updatePrintType={this.updatePrintType} updateFilterType={this.updateFilterType}/>
        </header>
        <main>
          <BookList books={this.state.books}/>
        </main>
      </div>
    );
  }
}

export default App;
