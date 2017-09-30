import React, { Component } from 'react'
import NavBar from '../components/NavBar'
import SelectField from 'material-ui/SelectField';
import MenuItem from 'material-ui/MenuItem';

const roomTypes = [
  'Sound-proof room',
  'Cafeteria space',
  'Outdoor space',
  'Small classroom',
  'Large auditorium',
  'Meeting room'
];

const equipments = [
  'Projector',
  'Desks & Chairs',
  'Whiteboard',
  'Blackboard',
  'Computers'
]

class LocationBookingContainer extends Component {
  state = {
    roomTypes: [],
    equipments: []
  };

  handleChange = (event, index, values) => this.setState({ [event.target.name]: values});

  menuItems(values, items) {
    return items.map((item) => (
      <MenuItem
        key={item}
        insetChildren={true}
        checked={values && values.indexOf(item) > -1}
        value={item}
        primaryText={item}
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
          value={this.state.roomTypes}
          onChange={this.handleChange}
          name='roomTypes'
        >
        {this.menuItems(this.state.roomTypes, roomTypes)}
      </SelectField>
      <SelectField
        multiple={true}
        hintText="Select a name"
        value={this.state.equipments}
        onChange={this.handleChange}
        name='equipments'
      >
      {this.menuItems(this.state.equipments, equipments)}
    </SelectField>
      </div>
    )
  }
}

export default LocationBookingContainer
