import { TabBarBottom, TabNavigator } from 'react-navigation';

import Counter from './Counter';
import Selection from './Selection';

const routerConfig = {
  Counter: {
    screen: Counter,
  },
  Selection: {
    screen: Selection,
  },
};

const TabConfig = {
  tabBarOptions: {
    activeTintColor: 'white',
    inactiveTintColor: 'black',
    activeBackgroundColor: 'tomato',
    inactiveBackgroundColor: 'white',
  },
  tabBarComponent: TabBarBottom,
  tabBarPosition: 'bottom',
  animationEnabled: false,
  swipeEnabled: false,
  routerConfig,
};

const TabNavigatorConfig = TabNavigator(routerConfig, TabConfig);

export default TabNavigatorConfig;
