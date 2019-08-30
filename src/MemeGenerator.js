import React, {Component} from "react"

class MemeGenerator extends Component {
    constructor() {
        super()
        this.state ={
            topText: "",
            bottomText: "",
            randomImg: "http://i.imgflip.com/1bij.jpg",
            allMemeImgs: []
        }
        this.handleChange = this.handleChange.bind(this)
        this.handleSubmit = this.handleSubmit.bind(this)
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
        // pulling name and value fields from event.target
        const {name, value} = event.target
        this.setState({
            [name]: value
        })

    }

    handleSubmit(event) {
        event.preventDefault()
        // get random number from the array
        const randNum = Math.floor(Math.random()* this.state.allMemeImgs.length)
        const randMemeImg = this.state.allMemeImgs[randNum].url
        // update state
        this.setState({randomImg: randMemeImg})

    }

    render() {
        return (
            <div>
                <form className="meme-form" onSubmit={this.handleSubmit}>
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
                <div className="meme">
                    <img src={this.state.randomImg} alt="" />
                    <h2 className="topText">{this.state.topText}</h2>
                    <h2 className="bottomText">{this.state.bottomText}</h2>
                </div>
            </div>
        )
    }
}

export default MemeGenerator