import React from 'react';
import ClassGenerator from '../mixins/classGenerator';
import StateSelector from '../mixins/stateSelector';
import Unit from '../commons/unit';

let defaultClassName = 'ui checkbox';

module.exports = React.createClass({

  mixins: [ClassGenerator, StateSelector],

  render: function () {

    let {className, color, type, disabled, readOnly, ...other} = this.props;

    return (
      <Unit {...other}
        className={this.getClassName(defaultClassName)}
        color="null"
        type="div"
        disabled={this.getDisabled()}
        readOnly={this.getReadOnly()}>
        {this.props.children}
      </Unit>
    );
  },

  componentDidMount: function () {
    if (typeof this.props.init != 'undefined') {
      if (this.props.init === false) {
        return;
      }

      if (this.props.init === true) {
        $(this.getDOMNode()).checkbox();
      } else {
        $(this.getDOMNode()).checkbox(this.props.init);
      }
    }
  }
});
