import React, { PureComponent } from 'react';
export class CharacterPage extends PureComponent {
  state = {
    filterText: ''
  }

  setFields = (value, field) => {
    this.setState({
      [field]: value
    });
  };
  render() {
    //let Characters;
    if (Array.isArray(this.props.Characters)) {
      //Characters = filterFunction() 
    }
    return (
      <React.Fragment>
      </React.Fragment>
    );
  }
}

export default (CharacterPage);
