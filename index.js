/**
 * @format
 */

import {AppRegistry} from 'react-native';
import App from './app/index';
import {name as appName} from './app.json';

if (!__DEV__) {
  for (const key in console) {
    global.console[key] = () => { };
  }
}

AppRegistry.registerComponent(appName, () => App);
