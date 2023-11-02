import React, {Component} from 'react';
import {
  FlatList,
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  FlatListProps,
} from 'react-native';

const DATA = [
  {
    id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28ba',
    title: '0-',
  },
  {
    id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28ba',
    title: '1111',
  },
  {
    id: '3ac68afc-c605-48d3-a4f8-fbd91aa97f63',
    title: '2222',
  },
  {
    id: '58694a0f-3da1-471f-bd96-145571e29d72',
    title: '3333',
  },
  {
    id: '58694a0f-3da1-471f-bd96-145571e29d72',
    title: '4444',
  },
  {
    id: '58694a0f-3da1-471f-bd96-145571e29d72',
    title: '5555',
  },
  {
    id: '58694a0f-3da1-471f-bd96-145571e29d72',
    title: '-0',
  },
];

export default class Wheel extends Component {
  listRef: React.RefObject<FlatListProps>;

  constructor(props) {
    super(props);
    this.listRef = React.createRef();

    this.state = {
      checked: [0],
    };
  }

  adjustScroll = ({nativeEvent}) => {
    const {x, y} = nativeEvent.contentOffset;
    console.info('yy', y);
    // console.info('listRef', listRef);
    const adjustY = Math.round(y / 60);
    setCheck([adjustY + 1]);
    this.listRef.scrollToIndex({
      index: adjustY,
      animated: true,
    });
  };

  renderItem = itemData => {
    const [checked] = this.state;

    const {item, index} = itemData;
    const itemStyle =
      index === checked[0] ? {fontWeight: '700'} : {fontWeight: '400'};
    return (
      <TouchableOpacity style={[styles.item]}>
        <Text style={[styles.title, itemStyle]}>{item.title}</Text>
      </TouchableOpacity>
    );
  };

  render(): React.ReactNode {
    return (
      <View style={{height: 180}}>
        <View
          style={{
            height: '100%',
            zIndex: 1,
          }}>
          <View style={styles.fakeItem} />
          <View style={styles.fakeItem} />
          <View style={styles.fakeItem} />
        </View>
        <View style={styles.maskList}>
          <FlatList
            ref={this.listRef}
            data={DATA}
            renderItem={this.renderItem}
            onMomentumScrollEnd={this.adjustScroll}
            pinchGestureEnabled={false}
            // onScrollEndDrag={adjustScroll}
            keyExtractor={data => data.title}
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
    backgroundColor: '#a00',
    borderTopColor: 'rgba(0,0,0,0.2)',
    borderTopWidth: 1,
  },
  title: {
    fontSize: 32,
  },
  maskList: {
    position: 'absolute',
    width: '33%',
    // backgroundColor: '#00a',
    top: 0,
    bottom: 0,
    zIndex: 99,
  },
});
