import React, { Component } from 'react'
import axios from 'axios'
import cocktail from './cocktail'
import { data } from 'jquery'


class Main extends Component {
   constructor(props){
     super(props)
     this.state={
         server:process.env.REACT_APP_SERVER,
         showData:false,
         Data:[],
         index:0
     }

}

 componentDidMount=async()=>{
     const resultData = await axios.get(`${this.state.server}/getcocktail`)
     this.setState({
         data:resultData.data,
         showData:true
     })
 }

 addTofav = async()=>{
     await axios.post(`${this.state.server}/addfavourite`,data)
 }

    render() {
        return (
            <>
            {this.state.showData &&
            this.state.data.map((item,index)=>
            return (
                <cocktail
                
                cocktail={item}
                index={index}
                addTofav={this.addTofav}
                />
            )
            })
        }
                
            </>
        )
    }
}

export default Main
