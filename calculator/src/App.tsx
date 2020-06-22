import React, { Component } from 'react'
import './style.scss'

function HeadTitle() {
  return (<h1>Calculator </h1>)
}


class InputNum extends Component<any, any> {

  render() {
    return (
      <input type="number" placeholder="input number" onChange={(e) => this.props.onChange(e)} />
    )
  }
}

interface CalculatorProps {
  first: number,
  second: number,
  firstOnChange: any,
  secondOnChange: any
}


class Calculator extends Component<CalculatorProps> {

  handleFirstInput = (event: any) => {
    this.props.firstOnChange(parseInt(event.target.value))
  }

  handleSecondInput = (event: any) => {
    this.props.secondOnChange(parseInt(event.target.value))
  }

  render() {
    return (<div>
      <InputNum onChange={(event: any) => this.handleFirstInput(event)} />
      <span> + </span>
      <br />
      <InputNum onChange={(event: any) => this.handleSecondInput(event)} />
      <span> = </span>
    </div>
    )
  }
}

interface FooterProps {
  sum: number,
  onClick: () => void
}

class Footer extends Component<FooterProps> {

  render() {
    return (
      <div>
        <button onClick={() => this.props.onClick()} > calculator </button>
        <span> {this.props.sum} </span>
      </div>
    )
  }
}


interface ContentProps {
  first: number,
  second: number,

  tempFirst: number,
  tempSecond: number,
}

class Content extends Component<any, ContentProps> {

  constructor(props: ContentProps) {
    super(props)
    this.state = {
      first: 0,
      second: 0,
      tempFirst: 0,
      tempSecond: 0,
    }
  }

  calculaor() {

    console.log("calculaor")
    this.setState({
      first: this.state.tempFirst,
      second: this.state.tempSecond
    })
  }

  firstInputChange = (value: number) => {
    this.setState({
      tempFirst: value
    })
    console.log('this.first  ' + value)
  }

  secondInputChange = (value: number) => {
    this.setState({
      tempSecond: value
    })
    console.log('this.second:  ' + value)
  }


  render() {
    return (
      <div>
        <HeadTitle />
        <Calculator first={this.state.tempFirst}
          second={this.state.tempSecond}
          firstOnChange={(value: any) => this.firstInputChange(value)}
          secondOnChange={(value: any) => this.secondInputChange(value)} />
        <Footer onClick={() => this.calculaor()} sum={this.state.first + this.state.second} />
      </div>

    )
  }
}


class App extends Component {
  render() {
    return (<Content />)
  }
}



export default App
