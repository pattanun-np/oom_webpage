import React, {Component} from 'react';
import './Loader.css'
import { Progress } from 'reactstrap';

export default class News extends Component{
    render(){
      return(
        <div className="Loader">
         <Progress animated value={2 * 5} />
        </div>
      );
    }
}
