import React, {useState} from 'react';
import {StyleSheet, View, Text, TouchableOpacity} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

import Home from '../pages/Home';
import Detail from '../pages/Detail';
import type {RootStackParamList} from './logic/types';
import {setGlobalModal} from '../global';

const Stack = createNativeStackNavigator<RootStackParamList>();

const Navigator = () => {
  const [modalData, setModalData] = useState<Record<string, string> | null>(
    null,
  );

  const publicSetModal = (data: Record<string, string> | null) => {
    setModalData(data);
  };

  setGlobalModal(publicSetModal);

  return (
    <View style={styles.root}>
      <NavigationContainer>
        <Stack.Navigator initialRouteName="Home">
          <Stack.Screen
            name="Home"
            component={Home}
            options={{title: '首页'}}
          />
          <Stack.Screen
            name="Detail"
            component={Detail}
            options={{title: '详情'}}
          />
        </Stack.Navigator>
      </NavigationContainer>
      {modalData && (
        <View style={styles.modal}>
          <View style={styles.modalContent}>
            <Text style={styles.modalTitle}>{modalData.title}</Text>
            <TouchableOpacity
              style={styles.modalClose}
              onPress={() => setModalData(null)}>
              <Text style={styles.modalCloseText}>关闭</Text>
            </TouchableOpacity>
          </View>
        </View>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  root: {
    flex: 1,
  },
  modal: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(108, 0, 0, 0.5)',
  },
  modalContent: {
    backgroundColor: '#fff',
    borderRadius: 12,
    padding: 24,
    width: '75%',
    alignItems: 'center',
  },
  modalTitle: {
    fontSize: 18,
    fontWeight: '600',
    color: '#333',
    marginBottom: 20,
  },
  modalClose: {
    backgroundColor: '#4a90d9',
    paddingHorizontal: 24,
    paddingVertical: 10,
    borderRadius: 8,
  },
  modalCloseText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: '600',
  },
});

export default Navigator;
