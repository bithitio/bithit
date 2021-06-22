import React, { Component } from 'react'
import BuyForm from './BuyForm'

class Main extends Component {
  constructor(props) {
    super(props)
    this.state = {
      currentForm: 'buy'
    }
  }

  render() {
    let content
    if(this.state.currentForm === 'buy') {
      content = <BuyForm
        ethBalance={this.props.ethBalance}
        tokenBalance={this.props.tokenBalance}
        buyTokens={this.props.buyTokens}
      />
    } else {
      content = <BuyForm
        ethBalance={this.props.ethBalance}
        tokenBalance={this.props.tokenBalance}
        buyTokens={this.props.buyTokens}
      />
    }

    return (
      <div id="content" className="mt-3">
        <br></br>
        <br></br>
        <div className="card mb-4" >
          <div className="card-body">
            {content}
          </div>
        </div>
        <br></br>        
      <center><h6 class="h6-a">You Address: {this.props.account}</h6></center>
		</div>
      
    );
  }
}

export default Main;
