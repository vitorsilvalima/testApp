import { StackNavigator } from 'react-navigation';

import Home from './Home';
import Employee  from './Employee'

export default StackNavigator({
  Home: {
    screen: Home,
  },
  Employee: {
    screen: Employee
  }
},
{
  headerMode: 'none',
  navigationOptions: {
      headerVisible: false,
  },
  initialRouteName: 'Home',
});