import React, { Component } from 'react'
import { CloseCircle } from 'iconsax-react'

export default class Task extends Component {

    constructor(props){
        super(props)
        this.state = {
            desc : this.props.desc
        }
        this.handleDelete = this.handleDelete.bind(this)
    }

    handleDelete(){
        this.setState({
            desc:this.props.desc
        })
        this.props.handleDelete(this.state.desc)
    }

  render() {
    return (
        <div className=' w-full flex justify-between m-1 p-1 pl-5 max-w-[500px] bg-gray-200 rounded-md border-2 hover:border-purple-500 transition ease-in-out delay-150'>
            <p className='font-sans'>{this.props.desc}</p>
            <button onClick={this.handleDelete}>
            <CloseCircle className='' size="22" color="red" variant="Broken"/>
            </button>
        </div> 
    )
  }
}
