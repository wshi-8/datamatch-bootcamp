import React from 'react';
import './CardViewer.css';
import { Link } from 'react-router-dom';

class CardViewer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      index: 0,
      front: true,
    };
  }

  next = () => {
    if (this.state.index < this.props.cards.length - 1) {
      this.setState({
        index: this.state.index + 1,
        front: true,
      });
    }
  };

  prev = () => {
    if (this.state.index > 0) {
      this.setState({
        index: this.state.index - 1,
        front: true,
      });
    }
  };

  flip = () => this.setState({ front: !this.state.front });

  render() {
    return (
      <div>
        <h2> Card Viewer </h2>
        {this.state.index + 1}/{this.props.cards.length}
        <div className="card" onClick={this.flip}>
          {this.props.cards[this.state.index][this.state.front ? 'front' : 'back']}
        </div>
        <br />
        <button disabled={this.state.index <= 0} onClick={this.prev}>
          Previous Card
        </button>
        <button disabled={this.state.index >= this.props.cards.length - 1} onClick={this.next}>
          Next Card
        </button>
        <hr />
        <Link to="/editor">Go to card editor</Link>
      </div>
    );
  }
}

export default CardViewer;