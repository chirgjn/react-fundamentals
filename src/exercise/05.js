// Styling
// http://localhost:3000/isolated/exercise/05.js

import * as React from 'react'
import '../box-styles.css'

const Box = function ({size, ...rest}) {
  let className = 'box';
  switch(size) {
    case 'small': className += " box--small"; break;
    case 'medium': className += " box--medium"; break;
    case 'large': className += " box--large"; break;
    default: throw Error("Invalid size");
  }
  return <div className={className} {...rest} />;
};
const smallBox = <Box size="small" style={{backgroundColor: 'lightblue', fontStyle: 'italic'}}>small lightblue box</Box>
const mediumBox = <Box size="medium" style={{backgroundColor: 'pink', fontStyle: 'italic'}}>medium pink box</Box>
const largeBox = <Box size="large" style={{backgroundColor: 'orange', fontStyle: 'italic'}}>large orange box</Box>

function App() {
  return (
    <div>
      {smallBox}
      {mediumBox}
      {largeBox}
    </div>
  )
}

export default App
