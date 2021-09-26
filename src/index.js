import React from 'react';
import ReactDOM from 'react-dom';
import Card from "./Cards";
import './index.css';
import Sdata from "./Sdata";



// function ncard(val){
//   return(
//     <Card 
//     imgsrc={val.imgsrc}
//     title={val.title}
//     sname={val.sname}
//     link={val.links}
//   />
//   );
// }

ReactDOM.render(
  <>
  <h1 className="heading_style">List of top 5 Korean Drama</h1>
  {Sdata.map(function ncard(val){
    return(
      <Card 
      imgsrc={val.imgsrc}
      title={val.title}
      sname={val.sname}
      link={val.links}
    />
    );
  })}
  </>,
  document.getElementById('root')

);
export default Card;
