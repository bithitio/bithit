import React, { Component } from 'react'
import bithitLogo from './bithit-logo.png'
import bnbLogo from './bnb-logo.png'

class BuyForm extends Component {
  constructor(props) {
    super(props)
    this.state = {
      output: '0'
    }
  }

  render() {
    return (
      <form className="mb-3" onSubmit={(event) => {
          event.preventDefault()
          let etherAmount
          etherAmount = this.input.value.toString()
          etherAmount = window.web3.utils.toWei(etherAmount, 'Ether')
          this.props.buyTokens(etherAmount)
        }}>
        <div>
          <label className="float-left"><b>Input</b></label>
          <span className="float-right text-muted">
            Balance: {window.web3.utils.fromWei(this.props.ethBalance, 'Ether')}
          </span>
        </div>
        <div className="input-group mb-4">
          <input
            type="text"
            onChange={(event) => {
              const etherAmount = this.input.value.toString()
              this.setState({
                output: etherAmount * 390000
              })
            }}
            ref={(input) => { this.input = input }}
            className="form-control form-control-lg"
            placeholder="0"
            required />
          <div className="input-group-append">
            <div className="input-group-text">
              <img src={bnbLogo} height='32' alt=""/>
              &nbsp;&nbsp;&nbsp; BNB
            </div>
          </div>
        </div>
        <div>
          <label className="float-left"><b>Output</b></label>
          <span className="float-right text-muted">
            Balance: {window.web3.utils.fromWei(this.props.tokenBalance, 'Ether')}
          </span>
        </div>
        <div className="input-group mb-2">
          <input
            type="text"
            className="form-control form-control-lg"
            placeholder="0"
            value={this.state.output}
            disabled
          />
          <div className="input-group-append">
            <div className="input-group-text">
              <img src={bithitLogo} height='32' alt=""/>
              &nbsp; BITHIT
            </div>
          </div>
        </div>
        <div className="mb-5">
          <span className="float-left text-muted">Exchange Rate</span>
          <span className="float-right text-muted">1 BNB = 390000 BITHIT</span>
        </div>
        <button type="submit" className="btn btn-primary btn-block btn-lg">Buy!</button>
      </form>
    );
  }
}

export default BuyForm;
