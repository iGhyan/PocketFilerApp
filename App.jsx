import 'react-native-gesture-handler';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createDrawerNavigator } from '@react-navigation/drawer';
import AppStack from './src/navigation/AppStack';
import AppDrawer from './src/navigation/AppDrawer';
import { Dimensions, StyleSheet, View} from 'react-native';

const Stack = createStackNavigator();
const Drawer = createDrawerNavigator();

const { width, height } = Dimensions.get('window');


const styles = StyleSheet.create({
  container: {
    width: width,
    height: height,
    fontFamily: 'ClashGrotesk-Regular',
  },
  text: {
    fontSize: width * 0.05,
    color: '#0A1126',
    fontFamily: 'ClashGrotesk-Regular',
  },
  title:{
    fontFamily: 'ClashGrotesk-Regular',
  },
  description:{
    fontFamily: 'ClashGrotesk-Regular',
  },
  box: {
    width: width * 0.8,
    height: height * 0.4,
    backgroundColor: 'skyblue',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 10,
    fontFamily: 'ClashGrotesk-Regular',
  },
});


function App() {
  return (
    <NavigationContainer>
      <View style={styles.container}>
      <AppStack />
      {/* <AppDrawer /> */}
      </View>
    </NavigationContainer>
  );
}

export default App;
