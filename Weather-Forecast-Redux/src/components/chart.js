import _ from 'lodash';
import React from 'react';
import { Sparklines, SparklinesLine, SparklinesReferenceLine } from 'react-sparklines';


function average(data){
  return _.round(_.sum(data)/data.length);
}

export default (props) => {
  return(
    <div>
      <Sparklines svgHeight={120} svgWidth={250} data={props.data}>
        <SparklinesLine color={props.color} style={{fill:'none'}} />
        <SparklinesReferenceLine type="avg" />
      </Sparklines>
      <div className="mx-auto">{average(props.data)} {props.units}</div>
    </div>
  );
}
