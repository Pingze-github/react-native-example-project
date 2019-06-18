import { createAppContainer, createStackNavigator } from 'react-navigation'

import AppContainer from './containers/App'

const RootStack = createStackNavigator({
  Home: AppContainer,
}, {
  initialRouteName: 'Home',
})

export default createAppContainer(RootStack)
