import React, {Component} from 'react';
import {
  FlatList,
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  FlatListComponent,
  NativeSyntheticEvent,
  NativeScrollEvent,
} from 'react-native';

type TWheelProps = {
  checkRange: number;
  itemHeight: number;
  wheelItems: IWheelItemProps[];
};

type TWheelState = {
  checkedIndex: number;
};

type TEventHandler = NativeSyntheticEvent<NativeScrollEvent>;

export default class Wheel extends Component<TWheelProps, TWheelState> {
  listRef: React.RefObject<FlatListComponent<any, any>>;

  state = {
    checkedIndex: 0,
  };

  constructor(props: any) {
    super(props);
    this.listRef = React.createRef();
  }

  adjustScroll = (event: TEventHandler) => {
    const {y} = event.nativeEvent.contentOffset;
    const adjustY = Math.round(y / 60);
    this.setState({checkedIndex: adjustY});
    this.listRef?.current?.scrollToIndex({
      index: adjustY,
      animated: true,
      viewPosition: 0.5,
    });
  };

  renderItem = (itemData: {item: IWheelItemProps; index: number}) => {
    const {checkedIndex} = this.state;

    const {item, index} = itemData;
    const itemStyle =
      index === checkedIndex ? {fontWeight: '700'} : {fontWeight: '400'};
    return (
      <TouchableOpacity style={[styles.item]}>
        <Text style={[styles.title, itemStyle]}>{item.label}</Text>
      </TouchableOpacity>
    );
  };

  render() {
    const {checkRange, itemHeight, wheelItems} = this.props;
    console.info('[wheelItems]', wheelItems);

    const fillCount = (checkRange - 1) / 2;

    return (
      <View style={{flex: 1, height: 60 * checkRange}}>
        <View
          style={{
            height: '100%',
            zIndex: 1,
          }}>
          {/* <View style={styles.fakeItem} />
          <View style={styles.fakeItem} />
          <View style={styles.fakeItem} />
          <View style={styles.fakeItem} />

          <View style={styles.fakeItem} /> */}

          {new Array(checkRange).fill(1).map((ele, i) => (
            <View style={styles.fakeItem} key={i} />
          ))}
        </View>
        <View style={styles.maskList}>
          <FlatList
            contentContainerStyle={{
              paddingTop: fillCount * 60,
              paddingBottom: fillCount * 60,
            }}
            ref={this.listRef}
            data={wheelItems}
            renderItem={this.renderItem}
            onMomentumScrollEnd={this.adjustScroll}
            pinchGestureEnabled={false}
            // onScrollEndDrag={adjustScroll}
            keyExtractor={data => data.id.toString()}
            showsVerticalScrollIndicator={false}
            // snapToAlignment={'start'}
            // snapToInterval={60}
          />
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'flex-end',
    // marginTop: StatusBar.currentHeight || 0,
  },
  item: {
    // padding: 20,
    height: 60,
    justifyContent: 'center',
    alignItems: 'center',
    // marginVertical: 8,
    // marginHorizontal: 16,
    // borderTopColor: '#000',
    // borderTopWidth: 1,
  },
  fakeItem: {
    flex: 1,
    backgroundColor: '#eee',
    borderTopColor: 'rgba(0,0,0,0.2)',
    borderTopWidth: 1,
  },
  title: {
    fontSize: 32,
  },
  maskList: {
    position: 'absolute',
    width: '100%',
    // backgroundColor: '#00a',
    top: 0,
    bottom: 0,
    zIndex: 99,
  },
});
