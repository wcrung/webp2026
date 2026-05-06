import React from 'react';
import IconButton from '@material-ui/core/IconButton';
import DeleteIcon from '@material-ui/icons/Delete';
import AlarmIcon from '@material-ui/icons/Alarm';
import AddShoppingCartIcon from '@material-ui/icons/AddShoppingCart';

const MultiButton=()=>{
  return (
    <div>
      <IconButton color="primary">
        <AddShoppingCartIcon />
      </IconButton>
    
      <IconButton color="secondary">
        <DeleteIcon />
      </IconButton>
    
      <IconButton color="default">
        <AlarmIcon/>
      </IconButton>
    </div>
  );
};

export default MultiButton;
