import React, {Component} from 'react';
import {StyleSheet, TouchableOpacity, View, Text} from 'react-native';
import SlidePicker from '..';

import PARALLEL_DATA from '../test_data/parallel.json';

export default class Demo extends Component {
  state = {demoType: '', timeData: []};

  constructor(props: any) {
    super(props);
  }

  render() {
    return (
      <View style={styles.page}>
        <View>
          <TouchableOpacity onPress={() => {}}>
            <Text></Text>
          </TouchableOpacity>
        </View>
        <View>
          <Text>Parallel</Text>
          <TouchableOpacity onPress={() => {}}>
            <Text>时间</Text>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => this.setState({demoType: 'parallel_time'})}>
            <Text>ABC</Text>
          </TouchableOpacity>
        </View>

        <SlidePicker.Parallel
          visible={this.state.demoType === 'parallel_time'}
          data={PARALLEL_DATA}
          value={this.state.timeData}
          wheels={2}
          checkRange={5}
          checkedTextStyle={styles.checkedStyle}
          onCancelClick={() => this.setState({demoType: ''})}
          onConfirmClick={res => {
            console.info('[res]', res);
            this.setState({timeData: res, demoType: ''});
          }}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  page: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  checkedStyle: {
    color: '#a00',
  },
});
