import HomeStack from './homeStack';
import AboutStack from './aboutStack';
import { createDrawerNavigator } from 'react-navigation-drawer';
import { createAppContainer } from 'react-navigation';

// drawer navigation options
const DrawerNavigator = createDrawerNavigator({
  Home: {
    screen: HomeStack,
  },

// stacks
  About: {
    screen: AboutStack,
  },
});

export default createAppContainer(DrawerNavigator);