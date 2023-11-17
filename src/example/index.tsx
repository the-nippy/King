import React, {Component, PropsWithChildren} from 'react';
import {StyleSheet, TouchableOpacity, View, Text} from 'react-native';
import SlidePicker from '..';

import PARALLEL_DATA from '../test_data/parallel.json';
import CASCADE_DATA from '../test_data/cascade.json';
import PARALLEL_TIME from '../test_data/parallel_time.json';
import PARALLEL_SKU from '../test_data/parallel_sku.json';

type IExampleState = {
  skuData: IPickerValueProps[];
  areaData: IPickerValueProps[];
  timeData: IPickerValueProps[];
  demoType: string;
};

export default class Demo extends Component<PropsWithChildren, IExampleState> {
  constructor(props: any) {
    super(props);
    this.state = {
      demoType: '',
      timeData: [],
      skuData: [],
      areaData: [],
    };
  }

  render() {
    const {areaData, skuData, timeData} = this.state;

    return (
      <View style={styles.page}>
        <View style={styles.block}>
          <Text style={styles.title}>Cascade</Text>
          <TouchableOpacity
            style={styles.item}
            onPress={() => this.setState({demoType: 'cascade_area'})}>
            <Text style={styles.name}>Area</Text>
            <Text style={styles.values}>
              {areaData.map(ele => ele.label).join(',')}
            </Text>
          </TouchableOpacity>
        </View>
        <View style={[styles.block, {marginTop: 60}]}>
          <Text style={styles.title}>Parallel</Text>

          <TouchableOpacity
            style={styles.item}
            onPress={() => this.setState({demoType: 'parallel_time'})}>
            <Text style={styles.name}>Time</Text>
            <Text style={styles.values}>
              {timeData.map(ele => ele.label).join(',')}
            </Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={styles.item}
            onPress={() => this.setState({demoType: 'parallel_sku'})}>
            <Text style={styles.name}>SKU</Text>
            <Text style={styles.values}>
              {skuData.map(ele => ele.label).join(',')}
            </Text>
          </TouchableOpacity>
        </View>

        <SlidePicker.Cascade
          visible={this.state.demoType === 'cascade_area'}
          data={CASCADE_DATA}
          value={this.state.areaData}
          wheels={3}
          itemDividerColor={'#a00'}
          onCancelClick={() => this.setState({demoType: ''})}
          onConfirmClick={res => {
            console.info('[res]', res);
            this.setState({areaData: res, demoType: ''});
          }}
        />

        <SlidePicker.Parallel
          visible={this.state.demoType === 'parallel_time'}
          data={PARALLEL_TIME}
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

        <SlidePicker.Parallel
          visible={this.state.demoType === 'parallel_sku'}
          data={PARALLEL_SKU}
          value={this.state.skuData}
          wheels={3}
          checkRange={3}
          checkedTextStyle={styles.checkedStyle}
          onCancelClick={() => this.setState({demoType: ''})}
          onConfirmClick={res => {
            console.info('[res]', res);
            this.setState({skuData: res, demoType: ''});
          }}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  page: {
    flex: 1,
    paddingTop: 120,
    alignItems: 'center',
  },
  block: {
    width: '80%',
  },
  title: {
    fontWeight: '700',
    fontSize: 18,
    color: '#222',
  },
  name: {
    fontSize: 16,
    color: '#444',
  },
  values: {
    color: '#000',
    fontWeight: '700',
  },
  item: {
    marginTop: 16,
    borderBottomColor: '#aaa',
    borderBottomWidth: 1,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  checkedStyle: {
    color: '#a00',
  },
});
