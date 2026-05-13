import React from 'react';
import MultiButton from './cgu_multiButton';
import HelloCGU from './cgu_hello';

function App(){
  return(
    <div style={{ textAlign: 'center'}}>
      <div>
        {HelloCGU()}
      </div>
         
      <div style={{ marginTop: '30px'}}>
        {MultiButton()}
      </div>
    </div>
  );
}

export default App;
