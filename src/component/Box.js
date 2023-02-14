import React from 'react'

const Box = (props) => {
  let result;
  console.log("result값은",props.result)
  if(props.title === "computer" && props.result !== "tie" && props.result !== ""){
    result = props.result === "win" ? "lose" : "win";
  }else{
    result =props.result;
  }

  console.log("props",props)
  return (
    <div className={`box ${result}`}>
        <h1>{props.title}</h1>
        <img className="item-img" src={props.item && props.item.img}></img>
        <h2>{result}</h2>

    </div>
  );
};
export default Box;