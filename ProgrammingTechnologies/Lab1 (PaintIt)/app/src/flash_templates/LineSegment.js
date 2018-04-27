import React, { Component } from 'react'; // eslint-disable-line no-unused-vars
import { render } from 'react-dom'; // eslint-disable-line no-unused-vars

export default class LineSegment extends Component {
  render() {
    return (
      <p className="uk-width-4-5 uk-margin-remove-top">
        To draw a line segment click twice on the panel.
        You can select border color.
      </p>
    );
  }

  componentDidMount() {
    this.props.didMount();
  }
}