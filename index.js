/**
 * @format
 */

import {AppRegistry} from 'react-native';
// import App from './App';
// import Picker from './src/Wheel.tsx';
import Picker from './src/Parallel';
import {name as appName} from './app.json';

AppRegistry.registerComponent(appName, () => Picker);
