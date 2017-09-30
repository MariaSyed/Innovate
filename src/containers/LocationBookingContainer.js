import React, { Component } from 'react'
import NavBar from '../components/NavBar'
import SelectField from 'material-ui/SelectField';
import MenuItem from 'material-ui/MenuItem';

const roomTypes = [
  'Oliver Hansen',
  'Van Henry',
  'April Tucker',
  'Ralph Hubbard',
  'Omar Alexander',
  'Carlos Abbott',
  'Miriam Wagner',
  'Bradley Wilkerson',
  'Virginia Andrews',
  'Kelly Snyder',
];

class LocationBookingContainer extends Component {
  state = {
    values: [],
  };

  handleChange = (event, index, values) => this.setState({values});

  menuItems(values) {
    return roomTypes.map((roomType) => (
      <MenuItem
        key={roomType}
        insetChildren={true}
        checked={values && values.indexOf(roomType) > -1}
        value={roomType}
        primaryText={roomType}
      />
    ));
  }

  render() {
    return (
      <div>
        <NavBar title='Book a Space'/>
          <SelectField
          multiple={true}
          hintText="Select a name"
          value={this.state.values}
          onChange={this.handleChange}
        >
        {this.menuItems(this.state.values)}
      </SelectField>
      </div>
    )
  }
}

export default LocationBookingContainer
