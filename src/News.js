import React, { Component } from 'react'
import Newsitem from './Components/Newsitem'
import Spinner from './Components/Spinner';
import PropTypes from 'prop-types'



export default class News extends Component {
  static propTypes={
    category:PropTypes.string,
    country:PropTypes.string,
  }
  static defaultProps ={
    category:"general",
    country:"in"
  }

  articles = []
  constructor() {
    super();
    document.body.background="blue";
    this.state = {
      articles: this.articles,
      loading: false,
      page: 1,
      totalResults: 1
    }
  }
  async componentDidMount() {
    let url = `https://newsapi.org/v2/top-headlines?country=in&category=${this.props.category}&apiKey=f17bbe0a02004ca7bb42bf58a1c53f68&page=1&pageSize=6`;
    this.setState({loading:true});
    let data = await fetch(url);
    let parsedData = await data.json();
    // console.log(parsedData);
    this.setState({
      articles: parsedData.articles,
      totalResults: parsedData.totalResults,
      loading: false
    })
  }
  handleNext = async () => {
    if (Math.ceil(this.state.totalResults / 6) >= this.state.page + 1) {
      document.documentElement.scrollTop = 0;
      this.setState({loading:true});
      let url = `https://newsapi.org/v2/top-headlines?country=in&category=${this.props.category}&apiKey=f17bbe0a02004ca7bb42bf58a1c53f68&page=${this.state.page + 1}&pageSize=6`;
      let data = await fetch(url);
      let parsedData = await data.json(); 
      this.setState({
        articles: parsedData.articles,
        page: this.state.page + 1,
        loading: false
      })
    }
  }
  handlePrev = async () => {
    //console.log("Next")
    document.body.scrollTop = await (document.documentElement.scrollTop = 0);
    let url = `https://newsapi.org/v2/top-headlines?country=in&category=${this.props.category}&apiKey=f17bbe0a02004ca7bb42bf58a1c53f68&page=${this.state.page - 1}&pageSize=6`;
    let data = await fetch(url);
    let parsedData = await data.json();
    //console.log(parsedData);
    this.setState({
      articles: parsedData.articles,
      page: this.state.page - 1
    })
  }
  render() {
    return (
      <div className='container my-3'>
        <h2 className='d-flex justify-content-center'style={{margin:('30px')}}>Todays Breaking News</h2>
        {this.state.loading?<Spinner/>:""}
        <div className="row">
          {!this.state.loading && this.state.articles.map((element) => {
            return <div className="col-xl-4" key={element.url}>
              <Newsitem title={element.title} description={element.description === null ? '...' : element.description} url={element.urlToImage} newsUrl={element.url} />
            </div>
          })}
          <div className="container d-flex justify-content-between">
            <button disabled={this.state.page === 1} type="button" className="btn btn-dark" onClick={this.handlePrev}>Prev</button>
            <button disabled={Math.ceil(this.state.totalResults / 6) === this.state.page} type="button" className="btn btn-dark" onClick={this.handleNext}>Next</button>
          </div>
        </div>
      </div>
    )
  }
}
