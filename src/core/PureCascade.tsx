import React, {Component} from 'react';
import {View, StyleSheet} from 'react-native';
import Wheel from './Wheel';
import ParallelTestData from '../test_data/parallel.json';
import Header from './Header';

interface IParallelState {
  checkedIndexMarks: number[];
}

class PureCascade extends Component<SlidePickerType, IParallelState> {
  static defaultProps: SlidePickerType;
  setMarkTimer: ReturnType<typeof setTimeout> | null;
  cacheMarks: number[];
  constructor(props: any) {
    super(props);
    const {wheels} = this.props;
    const checkedMarks = new Array(wheels).fill(0);
    this.state = {checkedIndexMarks: checkedMarks};
    this.setMarkTimer = null;
    this.cacheMarks = checkedMarks;
  }

  componentWillUnmount(): void {
    this.setMarkTimer && clearTimeout(this.setMarkTimer);
  }

  // setCheckMark = (locationMark: number, checkedIndex: number) => {
  //   const indexMarks = [...this.state.checkedIndexMarks];
  //   console.info('[slice indexMarks]', indexMarks);
  //   indexMarks[locationMark] = checkedIndex;
  //   console.info('[indexMarks]', indexMarks);
  //   this.setState({checkedIndexMarks: indexMarks});
  // };

  setCheckMark = (locationMark: number, checkedIndex: number) => {
    const {wheels} = this.props;
    this.cacheMarks[locationMark] = checkedIndex;
    this.setMarkTimer && clearTimeout(this.setMarkTimer);
    this.setMarkTimer = setTimeout(() => {
      const targetMarks = [...this.cacheMarks];
      if (locationMark !== wheels - 1) {
        targetMarks.fill(0, locationMark + 1);
      }
      this.setState({checkedIndexMarks: targetMarks});
    }, 200);
  };

  onConfirmClickProxy = () => {
    // const {onConfirmClick, data} = this.props;
    // const result = [];
    // for (let i = 0; i < data.length; i++) {
    //   const checkedIndex = this.state.checkedIndexMarks[i];
    //   const element = data[i][checkedIndex];
    //   result.push(element);
    // }
    // onConfirmClick && onConfirmClick(result);
  };

  getCheckMarksByValue = () => {
    const {value, data} = this.props;
    const initialCheckedIndexMarks = [];
    for (let i = 0; i < value.length; i++) {
      const element = value[i];
      const wheelItems = data[i];
      const findIndex = (wheelItems as IWheelItemProps[]).findIndex(
        ele => ele?.id === element?.id,
      );
      initialCheckedIndexMarks.push(findIndex >= 0 ? findIndex : 0);
    }
    return initialCheckedIndexMarks;
  };

  getWheelItemsData = () => {
    const {data, wheels} = this.props;
    const {checkedIndexMarks} = this.state;
    console.info('checkedIndexMarks', checkedIndexMarks);
    let temp = data;
    const AllWheelItems = [temp];
    for (let index = 0; index < wheels; index++) {
      temp = (temp?.[checkedIndexMarks[index]] as IWheelItemProps)
        ?.contents as IWheelItemProps[];
      AllWheelItems.push(temp);
    }
    return AllWheelItems as IWheelItemProps[][];
  };

  render() {
    const {wheels, data, value} = this.props;
    // const initialCheckedIndexMarks = this.getCheckMarksByValue();

    const AllWheelItems = this.getWheelItemsData();

    return (
      <View>
        <Header {...this.props} onConfirmClick={this.onConfirmClickProxy} />
        <View style={styles.lists}>
          {new Array(wheels).fill(1).map((wheel, i) => {
            return (
              <Wheel
                key={i}
                wheelItems={AllWheelItems[i]}
                rowLocationMark={i}
                // initialCheckedIndex={initialCheckedIndexMarks[i]}
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

PureCascade.defaultProps = {
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

export default PureCascade;
