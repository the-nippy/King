import React from 'react';
import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';

import type {HomeScreenProps} from '../../navigator/logic/types';
import {showGlobalModal} from '../../global';

const Home = ({navigation}: HomeScreenProps) => {
  const handleNavigate = () => {
    navigation.navigate('Detail', {
      title: 'React Navigation 示例',
      id: 1,
    });
  };

  const handleShowModal = () => {
    showGlobalModal({title: '测试弹窗-xxxx'});
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Welcome to King</Text>
      <Text style={styles.subtitle}>这是首页</Text>
      <TouchableOpacity style={styles.button} onPress={handleNavigate}>
        <Text style={styles.buttonText}>跳转到详情页</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.button} onPress={handleShowModal}>
        <Text style={styles.buttonText}>showModal</Text>
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
    marginBottom: 8,
  },
  subtitle: {
    fontSize: 16,
    color: '#666',
    marginBottom: 32,
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

export default Home;
