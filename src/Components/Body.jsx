import React, { Component } from 'react'

export default class Body extends Component {


    constructor(props) {
        super(props)

        this.state = {
            input : ''
        }

        this.handleWrite = this.handleWrite.bind(this)
        this.handleSubmit = this.handleSubmit.bind(this)
    }

    handleWrite(event) {
        this.setState({
            input:event.target.value
        })
    }

    handleSubmit(){
        this.props.handleSubmit(this.state.input)
        this.setState({
            input : ''
        })
    }

  render() {
    return (
        <div className='mb-4'>
            <div className='w-full flex flex-col justify-center items-center'>
                <div className=' text-2xl font-bold pt-8'>
                    <p>Your Task</p>
                </div>
                <div className='w-[400px] p-10'>
                    <input type="text" onChange={this.handleWrite} value={this.state.input} placeholder='Add Your Task ...' className=' bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500' />
                </div>
                <div>
                    <button onClick={this.handleSubmit} className='w-[140px] transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-300 shadow bg-purple-500 hover:bg-purple-400 focus:shadow-outline focus:outline-none text-white font-bold py-2 px-4 rounded'>Add</button>
                </div>
            </div>
      </div>
    )
  }
}
