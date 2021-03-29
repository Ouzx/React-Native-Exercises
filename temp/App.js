import { createStackNavigation } from 'react-navigation-stack';
import { createAppContainer } from 'react-navigation';
import IndexScreen from './src/screens/IndexScreen';

const navigator = createStackNavigation({
  Index: IndexScreen,
}, {
  initialRouteName: 'Index',
  defaultNavigationOptions: {
    title: 'Blogs',
  }
});

export default createAppContainer(navigator);