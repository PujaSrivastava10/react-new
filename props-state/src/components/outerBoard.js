import React, { Component } from 'react';
import Board from './board.js';

class OuterBoard extends Component {
   constructor(){
     super();
     this.state={board : [ ]};
     //this.removeBoard=this.removeBoard.bind(this);
     //this.updateBoard=this.updateBoard.bind(this);
     this.add=this.add.bind(this,'Default text');
   }

   removeBoard=(i)=>{
     console.log('removinig comment '+i);
     var arr=this.state.board;
     arr.splice(i,1);
     this.setState({board : arr});
   }

   updateBoard=(newText,i)=>{
      console.log('updating comment '+i);
      var arr=this.state.board;
      arr[i]=newText;
      this.setState({board : arr});
   }
   add=(text)=>{
     var arr=this.state.board;
     arr.push(text);
     this.setState({board : arr})
   }
   // eachComment(text,i){
   //   console.log(i+' '+text);
   //   return(
   //     <div>
   //     <Board key={i} index={i} updateInBoard={this.updateBoard} deleteFromBoard={this.removeBoard}>
   //     {text}
   //     </Board>
   //     <button onClick={this.btn}>btn</button>
   //     </div>
   //   );
   // }

  render() {
    console.log(this);
    return (
      <div>
      <button className='btn-primary' onClick={this.add}>Add Components to board</button>
      <div className="App">
      {this.state.board.map((items,i)=>
        <Board key={i} index={i} updateInBoard={this.updateBoard} deleteFromBoard={this.removeBoard}>
        {items}
        </Board>
      )}
      </div>
      </div>
    );
  }
}

export default OuterBoard;
