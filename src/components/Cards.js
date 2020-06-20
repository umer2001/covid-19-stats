import React from 'react';
import './Components.css';
import Simplecard from './Card';
import Grid from '@material-ui/core/Grid';


export default function SpacingGrid({data:{confirmed, recovered, deaths, lastUpdate}}) {
    
    if(!confirmed) {
        return 'Loading...';
    }
    let mdate = new Date(lastUpdate).toDateString();
  return (
      <div className="grids">
            <Grid container justify="center">
                <Grid className="test" item xs={11} md={3}>
                    <Simplecard className="Confirmed" number={confirmed.value} update={mdate}/>
                </Grid>
                <Grid className="test" item xs={11} md={3}>
                    <Simplecard className="Recovered" number={recovered.value} update={mdate}/>
                </Grid>
                <Grid className="test" item xs={11} md={3}>
                    <Simplecard className="Deaths" number={deaths.value} update={mdate}/>
                </Grid>
            </Grid>
      </div>
    );
}

