import React, { Component } from 'react'
import Head from './Head';
import Body from './Body'
import Footer from './Footer'
export default class Todo extends Component {

  constructor(props){
    super(props)

    this.state = {
      todoList : [
        {desc:'One Task'},
        {desc:'Two Task'},
      ]
    }

    this.handleSubmit = this.handleSubmit.bind(this)
    this.handleDelete = this.handleDelete.bind(this)
  }
  handleSubmit(desc) {
    this.setState(state => {
      return {
        ...state,
        todoList:[
          ...state.todoList,
          {desc}
        ]
      }
    })
  }

  handleDelete(desc) {
    this.setState(state =>{
      return {
        ...state,
        todoList:[
          ...state.todoList.filter(item => item.desc !== desc)
        ]
      }
    })
  }


  render() {
    return (
      <div className='w-full h-full bg-purple-500 t-0 left-0 flex p-4 items-center justify-center fixed '>
        <div className='w-full rounded-md max-w-[960px] min-h-[565px] bg-white relative border-[1px] border-slate-100 shadow-md'>
          <Head title={"Matin Todo"}/>
          <Body handleSubmit={this.handleSubmit}/>
          <div className='border-b-[2px]'></div>
          <Footer handleDelete={this.handleDelete} todoList={this.state.todoList}/>
        </div>
      </div>
    )
  }
}
