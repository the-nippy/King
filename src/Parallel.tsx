import React, {Component, useRef, useState} from 'react';
import {View} from 'react-native';
import Wheel from './Wheel';

interface ISlidePickerProps {
  wheels: number;
  checkRange: 3 | 5 | 7;
  data: [];
  itemHeight: number;
}

class Parallel extends Component<ISlidePickerProps> {
  static defaultProps: ISlidePickerProps;

  constructor(props: any) {
    super(props);
    this.state = {};
  }

  render() {
    const {wheels, checkRange, data, itemHeight} = this.props;

    return (
      <View>
        {new Array(wheels).map((item, i) => {
          return (
            <Wheel
              checkRange={checkRange}
              wheelData={data[i]}
              itemHeight={itemHeight}
            />
          );
        })}
      </View>
    );
  }
}

Parallel.defaultProps = {
  wheels: 1,
  checkRange: 3,
  data: [],
  itemHeight: 50,
};

export default Parallel;
