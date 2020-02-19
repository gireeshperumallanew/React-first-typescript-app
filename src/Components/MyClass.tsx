import React, { Component } from 'react'

export interface MyClassProps{
    name: string;
    isMarried: boolean;
    defaultValue?: string;
}

export interface MyClassState{
    age: number;
}

class MyClass extends Component<MyClassProps, MyClassState> {

    state = {
        age: 21
    }

    public static dafaultProps: Partial<MyClassProps> = {
        defaultValue : "defaultValue"
    };

    render() {
        return (
            <div>
                <p>------ Component -------</p>
                <h1>Hello World</h1>
                <p>-------- Props ------------ </p>
                <h1>{this.props.name}</h1>
                <p>{this.props.isMarried}</p>
                <p>-------- Default Props ------------ </p>
                <p>{this.props.defaultValue}</p>
                <p> ----------- State -------- </p>
                <p>{this.state.age}</p>
            </div>
        )
    }
}

export default MyClass
