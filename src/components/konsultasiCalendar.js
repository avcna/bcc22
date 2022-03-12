import { Calendar, Alert } from 'antd';
import moment from 'moment';
import React from 'react';
import styled from 'styled-components';
import '../App.css'

export const Cal = styled(Calendar)`
  width : 500px;
  margin: 0 auto;
`;
export const Alert2 = styled(Alert)`
  width : 500px;
  margin: 0 auto;
  background-color: rgba(255, 183, 3, 0.3);
  border: none;
`;

class Date extends React.Component {
  state = {
    value: moment('2022-01-25'),
    selectedValue: moment('2022-01-25'),
  };

  onSelect = value => {
    this.setState({
      value,
      selectedValue: value,
    });
  };

  onPanelChange = value => {
    this.setState({ value });
  };

  render() {
    const { value, selectedValue } = this.state;
    return (
      <>
        <Alert2
          message={`Anda memilih tanggal: ${selectedValue && selectedValue.format('YYYY-MM-DD')}`}
        />
        <Cal value={value} onSelect={this.onSelect} onPanelChange={this.onPanelChange} />
      </>
    );
  }
}

export default Date;
