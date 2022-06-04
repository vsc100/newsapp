import React, { Component } from 'react'


export default class Newsitem extends Component {

  
  render() {
    let {title,description,url,newsUrl}=this.props;
    return (
      <div>
        <div className="card my-3">
          <img src={url?url:"https://img.etimg.com/thumb/msid-91977100,width-210,imgsize-108104,,resizemode-4,quality-100/stock-market-today.jpg"} style={{height:"200px"}}className="card-img-top" alt="..." />
          <div className="card-body">
            <h5 className="card-title">{title}</h5>
            <p className="card-text">{description}</p>
            <a rel="noreferrer" href={newsUrl} target={'_blank'}className="btn btn-sm btn-primary">Go somewhere</a>
          </div>
        </div>
      </div>
    )
  }
}
