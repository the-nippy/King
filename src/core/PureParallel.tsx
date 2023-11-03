import React, {Component} from 'react';
import {View, StyleSheet} from 'react-native';
import Wheel from './Wheel';
import ParallelTestData from '../test_data/parallel.json';
import Header from './Header';

interface IParallelState {
  checkedIndexMarks: number[];
}

class PureParallel extends Component<SlidePickerType, IParallelState> {
  static defaultProps: SlidePickerType;

  constructor(props: any) {
    super(props);
    const {wheels} = this.props;
    this.state = {
      checkedIndexMarks: new Array(wheels).fill(0),
    };
  }

  setCheckMark = (locationMark: number, checkedIndex: number) => {
    const indexMarks = this.state.checkedIndexMarks.slice();
    indexMarks[locationMark] = checkedIndex;
    console.info('[indexMarks]', indexMarks);
    this.setState({checkedIndexMarks: indexMarks});
  };

  onConfirmClickProxy = () => {
    const {onConfirmClick, data} = this.props;
    const result = [];
    for (let i = 0; i < data.length; i++) {
      const checkedIndex = this.state.checkedIndexMarks[i];
      const element = data[i][checkedIndex];
      result.push(element);
    }
    onConfirmClick && onConfirmClick(result);
  };

  getCheckMarksByValue = () => {
    const {value, data} = this.props;
    const initialCheckedIndexMarks = [];
    for (let i = 0; i < value.length; i++) {
      const element = value[i];
      const wheelItems = data[i];
      const findIndex = wheelItems.findIndex(ele => ele.id === element.id);
      initialCheckedIndexMarks.push(findIndex >= 0 ? findIndex : 0);
    }
    return initialCheckedIndexMarks;
  };

  render() {
    const {wheels, data, value} = this.props;
    const initialCheckedIndexMarks = this.getCheckMarksByValue();

    return (
      <View>
        <Header {...this.props} onConfirmClick={this.onConfirmClickProxy} />
        <View style={styles.lists}>
          {new Array(wheels).fill(1).map((wheel, i) => {
            return (
              <Wheel
                key={i}
                wheelItems={data[i]}
                rowLocationMark={i}
                initialCheckedIndex={initialCheckedIndexMarks[i]}
                setCheckMark={this.setCheckMark}
                {...this.props}
              />
            );
          })}
        </View>
      </View>
    );
  }
}

PureParallel.defaultProps = {
  visible: false,
  wheels: 2,
  checkRange: 3,
  data: ParallelTestData,
  itemHeight: 50,
  value: [],
};

const styles = StyleSheet.create({
  lists: {
    flexDirection: 'row',
    alignItems: 'center',
  },
});

export default PureParallel;
