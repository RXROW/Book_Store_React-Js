import React from 'react';

const HeadingTitle = ({title}) => {
  return (
    <div style={divStyle}>
      <h2 style={h2Style}> {title} </h2>
    </div>
  );
}

const divStyle = {
padding:"10px 30px",
backgroundColor:"#fff",



}
const h2Style = {
  color:"#9900ff",
  fontSize:"30px",
  fontWeight:"500",
  paddingBottom:"5px",
  borderBottom:"2px solid #9900ff",
  width:"max-content"


}
export default HeadingTitle;
