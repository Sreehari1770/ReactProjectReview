import React from "react";
import "./style.css";
import { marked } from "marked";


export default class App extends React.Component {
  state={
    text:''
  }
  handleChange=(e)=>{
    this.setState({text: e.target.value})
  }

  

  render() {
    const{text}=this.state;
    const markdown=marked(text);
 
    var inputStyle = {
      width: "400px",
      height: "50vh",
      marginLeft: "auto",
      marginRight: "auto",
      padding: "10px",
    };
    var outputStyle = {
      width: "400px",
      height: "50vh",
      backgroundColor: "#DCDCDC",
      marginLeft: "auto",
      marginRight: "auto",
      padding: "10px",
    };

    return (
      
      <div className="App">
        <div className="container">
          <div className="row mt-4">
           
            <div class="three">
              <h1>
                  Markdown Previewer
                  
              </h1>
            </div>
           
          </div>

          <div className="row mt-4">
            <div className="col-md-6">
              <div className="five">
                <h3>
                <span >
                    Enter the Input :
                    </span>
                </h3>
              </div>
              <div className="input" style={inputStyle}>
                <textarea
                  className="input"
                  style={inputStyle}
                  value={text}
                  onChange={this.handleChange}
                >
                </textarea>
              </div>
            </div>

            <div className="col-md-6">
             
              <div className="five">
                <h3>
                <span>
                   Result
                  </span>
                </h3>
              </div>
              <div className="shadow">
              <div
                style={outputStyle}
                dangerouslySetInnerHTML={{
                  __html: markdown,
                }}
              ></div>
              </div>
            </div>
          </div>
        </div>
      </div>
      
    );
  }
}