import React from 'react';
import './Upload.css'
import axios from 'axios';
export default class UploadImage extends React.Component {
  state = {
    selectedFile: null
  }

fileSelectedHandler = event => {
  this.setState({
      selectedFile:event.target.file[0]

  })

}

fileUploadHandler = () =>{
  axios.post('');

}
    render(){
        return(
          <div class="container">
          <input type="file" onChange={this.fileSelectedHandler}/>
          <button className="BTN" onClick={ this.fileUploadHandler}> UPLOAD</button>
          </div>

    )
  }
}
