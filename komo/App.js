import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

// Screens to navigate too
import homeScreen from "./src/screens/homeScreen"
import authenticationScreen from './src/screens/authenticationScreen';

//Initlize navigator for application
const Stack = createNativeStackNavigator();

//The main stack on how it will navivgate around the application.
export default function navigationStack() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Authentication" component={authenticationScreen} />
        <Stack.Screen name="Home" component={homeScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}