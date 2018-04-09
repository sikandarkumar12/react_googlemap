import { StackNavigator } from 'react-navigation';
import GoogleMap from './googlemap';
import Home from '../../Home';




 const Route = StackNavigator({
    Home: { screen: Home, },
    Map: { screen: GoogleMap, },
  });

  export default Route;