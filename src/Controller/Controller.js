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

    this.props.start()
  }

  pauseHandler() {

    this.setState({
      ...this.state,
      start: true,
      pause: false,
      lap: false,
      reset: true
    })

    this.props.pauseWatch()

  }


  resettHandler() {

    this.setState({
      start: true,
      pause: false,
      lap: false,
      reset: false
    })

    this.props.reset()

  }




  GetController() {

    let output = null

    if (this.state.start && !this.state.reset) {

      output = (
        <div className="m-2">
          <button
            className="btn btn-success btn-lg px-4"
            onClick={event => this.startHandler()}
          >Start</button>
        </div>
      )
    } else if (this.state.pause && this.state.lap) {

      output = (

        <div>
          <button
            className="btn btn-lg btn-primary pl-4 ml-4"
            onClick={event => this.pauseHandler()}
          >
            Pause
           </button>

        </div>

      )
    } else if (this.state.start && this.state.reset) {


      output = (

        <div>
          <button
            className="btn btn-lg btn-success pl-4 ml-4"
            onClick={event => this.startHandler()}
          >

            Start
           </button>

          <button
            className="btn btn-lg btn-danger pl-4 ml-4"
            onClick={event => this.resettHandler()}
          >

            Reset
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