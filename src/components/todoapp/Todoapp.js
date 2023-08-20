import React, { Component } from "react";
import "./Todo.css";

class Todoapp extends Component {
    state ={
        inputValue: "",
        item: []
    }
    handleChange=(event)=>{
        this.setState({
            inputValue : event.target.value
        })

    }
    storeItem = (event)=>{
        event.preventDefault();
        const {inputValue } = this.state;
        // const allitems = this.state.item;
        // allitems.push(inputValue)
        this.setState({
            item: [...this.state.item,inputValue],
            inputValue: ""
        })
    }
    
    deleteItem = (index)=>{
      const  allItems = this.state.item;
      //1 is used to delete the currrent item other wise we use 2 then delete a one vlaue at a time second value is also deleted
      allItems.splice(index,1)
      this.setState({
        item: allItems
      })

    }
  render() {
   //De struturing
    const{inputValue, item} = this.state;
   
    return (
      <div className="Todo-Condainer">
        <form className="input-section" onSubmit={this.storeItem} >
          <h2>Todo app</h2>
          <input type="text" placeholder="Enter..." value={inputValue} onChange={this.handleChange}/>
        </form>
        <ul>
         {item.map((value,index)=>(
            <li key={index}>{value} <i className="fas fa-trash-alt" onClick={()=> this.deleteItem(index)}></i></li>
         ))}
          
        </ul>
      </div>
    );
  }
}

export default Todoapp;


//<i className="fas fa-trash-alt">Hai</i>