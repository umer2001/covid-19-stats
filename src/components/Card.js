import React from 'react';
import CardContent from '@material-ui/core/Card';
import Typography from '@material-ui/core/Typography';
import CountUp from 'react-countup';


export default function Simplecard( { className, number, update } ) {
  
  return (
      <CardContent className="root">
        <Typography className="title" color="textSecondary" gutterBottom>
          {className}
        </Typography>
        <Typography className={`figures ${className}`}  variant="h5" component="h2">
          <CountUp 
            start={0}
            end={number}
            duration={2.5}
            separator=","
          />
        </Typography>
        <Typography className="pos" color="textSecondary">
          <small>{update}</small>
        </Typography>
      </CardContent>
  );
}
