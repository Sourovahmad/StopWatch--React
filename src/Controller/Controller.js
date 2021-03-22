import React, { Component } from "react"

class Controller extends Component {
  constructor(props) {
    super(props)
    this.state = {
      start: true,
      pause: false,
      lap: false,
      reset: false
    }
  }

  startHandler() {

    this.setState({
      ...this.state,
      start: false,
      pause: true,
      lap: true
    })
  }

  pauseHandler(){

  }

  lapHandler(){
    
  }


  GetController() {

    let output = null

    if (this.state.start) {

      output = (
        <div className="m-2">
          <button
            className="btn btn-success btn-lg px-4"
            onClick={event => this.startHandler()}
          >Start</button>
        </div>
      )
    } else if(this.state.pause && this.state.lap){

      output = (
             
        <div>
           <button 
           onClick={ event=> this.pauseHandler()}
           className="btn btn-lg btn-primary py-3">
               Pause
           </button>


           <button 
           onClick={ event=> this.lapHandler()}
           className="btn btn-lg btn-danger py-3">
               Lap
           </button>
        </div>

      )
    }

    return output
  }


  render() {

    return this.GetController()
    
  }
}

export default Controller