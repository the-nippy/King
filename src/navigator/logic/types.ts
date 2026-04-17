import type {NativeStackScreenProps} from '@react-navigation/native-stack';

export type RootStackParamList = {
  Home: undefined;
  Detail: {
    title: string;
    id: number;
  };
};

export type HomeScreenProps = NativeStackScreenProps<
  RootStackParamList,
  'Home'
>;

export type DetailScreenProps = NativeStackScreenProps<
  RootStackParamList,
  'Detail'
>;
