import React, { Component } from 'react'
import CardList from './components/cardList/CardList.component';
import "./App.css";
import axios from 'axios';
import SearchBox from './components/searchBox/SearchBox.component';
export default class App extends Component {
  constructor(){
    super();
    this.state={
      monsters:[],
      searchField:''
    }
  }
  componentDidMount(){
    axios.get("http://jsonplaceholder.typicode.com/users").then(res=>{
      console.log(res.data)
      this.setState({monsters:[...res.data]})
    }).catch(err=>{
      console.log(err)
    })
  }
  render() {
    const {monsters,searchField}=this.state;
    const filtered=monsters.filter(item=>item.name.toLowerCase().includes(searchField.toLowerCase()));

    return (
      <div className="App">
        <h1>Monster Cats</h1>
        <SearchBox 
          placeHolder="Search Monster"
          searchHandler={(e)=>{
            this.setState({searchField:e.target.value},()=>console.log(this.state.searchField))
          }}
        />
      
        <CardList monsters={filtered} />
         
        
      </div>
    )
  }
}
