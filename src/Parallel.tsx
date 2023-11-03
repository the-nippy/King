import React, {Component, useRef, useState} from 'react';
import {View, Text, StyleSheet} from 'react-native';
import Wheel from './Wheel';
import ParallelTestData from './test_data/parallel.json';

interface ISlidePickerProps {
  wheels: number;
  checkRange: 3 | 5 | 7;
  data: IWheelItemProps[][];
  itemHeight: number;
}

class Parallel extends Component<ISlidePickerProps> {
  static defaultProps: ISlidePickerProps;

  constructor(props: any) {
    super(props);
    this.state = {};
  }

  render() {
    const {wheels = 2, checkRange, data, itemHeight} = this.props;

    return (
      <View>
        <Text>XXXX</Text>
        <View style={styles.lists}>
          {new Array(wheels).fill(1).map((wheel, i) => {
            return (
              <Wheel
                key={i}
                wheelItems={data[i]}
                checkRange={checkRange}
                itemHeight={itemHeight}
              />
            );
          })}
        </View>
      </View>
    );
  }
}

Parallel.defaultProps = {
  wheels: 2,
  checkRange: 5,
  data: ParallelTestData,
  itemHeight: 50,
};

const styles = StyleSheet.create({
  lists: {
    flexDirection: 'row',
    alignItems: 'center',
  },
});

export default Parallel;
