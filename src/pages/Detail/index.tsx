import React from 'react';
import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';

import type {DetailScreenProps} from '../../navigator/logic/types';
import {showGlobalModal} from '../../global';

const Detail = ({route, navigation}: DetailScreenProps) => {
  const {title, id} = route.params;

  let count = 0;

  const handleShowModal = () => {
    count++;
    showGlobalModal({title: '测试弹窗-yyyy' + count});
  };

  // listener
  // addListener('xxxx',()=>{ showGlobalModal({title:''}) })

  return (
    <View style={styles.container}>
      <Text style={styles.title}>详情页</Text>
      <View style={styles.card}>
        <Text style={styles.label}>
          接收参数 title: <Text style={styles.value}>{title}</Text>
        </Text>
        <Text style={styles.label}>
          接收参数 id: <Text style={styles.value}>{id}</Text>
        </Text>
      </View>
      <TouchableOpacity
        style={styles.button}
        onPress={() => navigation.goBack()}>
        <Text style={styles.buttonText}>返回首页</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.button} onPress={handleShowModal}>
        <Text style={styles.buttonText}>测试弹窗</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#f5f5f5',
  },
  title: {
    fontSize: 28,
    fontWeight: '700',
    color: '#333',
    marginBottom: 24,
  },
  card: {
    backgroundColor: '#fff',
    borderRadius: 12,
    padding: 20,
    marginBottom: 32,
    width: '80%',
    shadowColor: '#000',
    shadowOffset: {width: 0, height: 2},
    shadowOpacity: 0.1,
    shadowRadius: 8,
    elevation: 4,
  },
  label: {
    fontSize: 16,
    color: '#666',
    marginBottom: 8,
  },
  value: {
    fontWeight: '600',
    color: '#4a90d9',
  },
  button: {
    marginTop: 20,
    backgroundColor: '#4a90d9',
    paddingHorizontal: 24,
    paddingVertical: 12,
    borderRadius: 8,
  },
  buttonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: '600',
  },
});

export default Detail;
