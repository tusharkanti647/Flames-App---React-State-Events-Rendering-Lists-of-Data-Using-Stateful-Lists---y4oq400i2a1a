import React, { Component, useState } from "react";
import '../styles/App.css';

/*
If the obtained value is 1, output "Friends"
If the obtained value is 2, output "Love"
If the obtained value is 3, output "Affection"
If the obtained value is 4, output "Marriage"
If the obtained value is 5, output "Enemy"
If the obtained value is 0, output "Siblings"
If any of the input is blank then output ''Please Enter valid input''
*/
const output = ["Siblings", "Friends", "Love", "Affection", "Marriage", "Enemy", "Please Enter valid input"];
class App extends Component {
    state = {
        inputValue1: "",
        inputValue2: "",
        outputValue: "",
    }

    handelInput1 = (event) => {
        this.setState({ inputValue1: event.target.value });
    }

    calculatRelationship = () => {
        let inputValue1 = this.state.inputValue1;
        let inputValue2 = this.state.inputValue2;

        if (inputValue1 === "" || inputValue2 === "") {
            this.setState({ outputValue: output[6] });
            return;
        }

        let lengthDecrese = 0;
        let n = inputValue1.length;
        for (let i = 0; i < n; i++) {
            if (inputValue2.includes(inputValue1[i])) {
                //inputValue2 = replaceAt(inputValue2, i, '*');
                //b = replaceAt(b, j, '*');
                inputValue2 = inputValue2.replace(inputValue1[i], "");
                inputValue1 = inputValue1.replace(inputValue1[i], "");
                n--;
                i--;
                //console.log(inputValue1);
                //console.log(inputValue2);
                //lengthDecrese += 2

            }
        }

        let length = inputValue1.length + inputValue2.length;
        // console.log(length);
        // console.log(inputValue1);
        // console.log(inputValue2);

        length = length % 6;

        this.setState({ outputValue: output[length] });

    }

    clearAll = () => {
        this.setState({ inputValue1: "" });
        this.setState({ inputValue2: "" });
        this.setState({ outputValue: "" });
    }

    render() {

        return (
            <div id="main">
                <input data-testid="input1" placeholder="First Name" onChange={this.handelInput1} value={this.state.inputValue1} />
                <input data-testid="input2" placeholder="Second Name" onChange={(event) => this.setState({ inputValue2: event.target.value })} value={this.state.inputValue2} />

                <button data-testid="calculate_relationship" onClick={this.calculatRelationship}>Calculate Relationship Future</button>

                <h3 data-testid="answer">{this.state.outputValue}</h3>

                <button data-testid="clear" onClick={this.clearAll}>Clear inputs and relationship status</button>
                {/* {console.log(output)} */}
                {/* Do not remove the main div */}
            </div>
        )
    }
}


export default App;
