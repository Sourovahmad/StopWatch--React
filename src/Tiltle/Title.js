import React from "react";
import "./Title.css";



class Title extends React.Component {

    constructor(props) {

        super(props)

        this.state = {
            Title: "this is khan Title",
            isInput: false,
        }
    }

    editHandeler() {

        this.setState({
            ...this.state,
            isInput: true
        })

    }

    inputChange(event) {

        this.setState({
            ...this.state,
            Title: event.target.value,

        })


    }


    keyPressHandeler(event) {

        if (event.key === 'Enter') {

            this.setState({
                ...this.state,
                isInput: false
            })
        }
    }


    blurHandler(event) {

        this.setState({
            ...this.state,
            isInput: false
        })
    }

    render() {

        let outPut = null

        if (this.state.isInput) {

            outPut = (
                <div>
                    <input
                        onChange={(event) => this.inputChange(event)}
                        onKeyPress={event => this.keyPressHandeler(event)}
                        onBlur={event => this.blurHandler(event)}

                        className="form-control" type="text" value={this.state.Title} />
                </div>
            )

            

        } else {

            outPut = (
                <div className="d-flex TitleSection">
                    <div className="display-4"> {this.state.Title} </div>
                    <span onClick={() => this.editHandeler()} className="h4 editIcon"> <i className="fas fa-pencil-alt"></i></span>
                </div>

            )

        }




        return (

            <>
                <div>

                    {outPut}

                </div>

            </>
        )
    }
}

export default Title;