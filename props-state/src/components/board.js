import React, { Component } from 'react';
//import App from './App.js';
//import OuterBoard from './outerBoard.js';

class Board extends Component {
  constructor(props) {
    super();
    this.state = {editing : false }
  }

 edit = () => {
      this.setState({editing: true});
       console.log('edit'+this);
       //alert('i m editing');
   }

  remove=()=>{
      this.props.deleteFromBoard(this.props.index);
      this.setState({editing : false});
  }

  save=()=>{
    var val=this.refs.newText.value;
    console.log(val);
    this.props.updateInBoard(val,this.props.index);
    this.setState({editing:false});
  }


  renderNormal() {
      console.log(this);
  return (
      <div className="Board">
      <h1 className="header">{this.props.children}</h1>
      <button className="btn-primary" onClick={this.edit}>Edit</button>
      <button className="btn-primary" onClick={this.remove}>Remove</button>
      </div>
    );
  }

  renderForm(){
    return(
      <div className="Board">
        <textarea ref="newText" defaultValue={this.props.children}></textarea>
        <button className="btn-primary" onClick={this.save}>Save</button>
      </div>
    );
}
  render(){

      if(this.state.editing){
        return this.renderForm();
      }
      else{
      return this.renderNormal();
      }

  }

}

export default Board;
