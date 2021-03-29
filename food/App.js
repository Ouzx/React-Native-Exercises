import { createStackNavigator } from "react-navigation-stack";
import { createAppContainer } from "react-navigation";
import SearchScreen from './src/screens/SearchScreen'
import ResultShowScreen from './src/screens/ResultShowScreen';

const navigator = createStackNavigator({
  Search: SearchScreen,
  Result: ResultShowScreen,
}, {
  initalRouteName: 'Search',
  defaultNavigationOptions: {
    title: 'Business Search'
  }
});

export default createAppContainer(navigator);