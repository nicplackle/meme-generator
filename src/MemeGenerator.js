import React, {Component} from "react"

class MemeGenerator extends Component {
    constructor() {
        super()
        this.state ={
            topText: "",
            bottomText: "",
            randomImage: ("http://i.imgflip.com/lbij.jpg"),
            allMemeImgs: []
        }
        this.handleChange = this.handleChange.bind(this)
    }

    componentDidMount() {
        fetch("https://api.imgflip.com/get_memes")
            .then(response => response.json()
            .then(response => {
                const {memes} = response.data
                this.setState({ allMemeImgs:memes })
            }))
    }

    handleChange(event) {
        console.log("working crapperino");

    }

    render() {
        return (
            <div>
                <form className="meme-form">
                    <input 
                        type="text" 
                        name="topText" 
                        placeholder="input top text here ..."
                        value={this.state.topText}
                        onChange={this.handleChange}
                    >
                    </input>        
                    <input 
                        type="text" 
                        name="bottomText" 
                        placeholder="input bottom text ..."
                        value={this.state.bottomText}
                        onChange={this.handleChange}
                    >
                    </input>
                       
                    <button>GENERATE!</button>
                </form>
            </div>
        )
    }
}

export default MemeGenerator