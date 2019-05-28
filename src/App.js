import React from 'react';
import './App.css';

import Header from './Header';
import BookList from './BookList';

const API_KEY = 'AIzaSyDQ1v1nWOS3VQALosV4Pn2JPhcjMibUShg';

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
    const BASE_URL = `https://www.googleapis.com/books/v1/volumes?t=`;
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
      .then(res => {
        return res.json()
      })
      .then(res => {
        console.log(res);
        if (res.error) {
          return Promise.reject(res.error)
        }
        this.setState({
          books: res.items
        })
      })
      .catch(err => {
        console.log(err);
        this.setState({
          error: err.message
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
    if (this.state.error) {
      return (
        <div className="App">
        <header className="App-header">
          <Header updateSearchTerm={this.updateSearchTerm} updatePrintType={this.updatePrintType} updateFilterType={this.updateFilterType}/>
        </header>
        <main>
        <div>{this.state.error}</div>
        </main>
      </div>
      )
    }

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
