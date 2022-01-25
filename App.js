import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import ScreenOne from "./components/ScreenOne";
import ScreenTwo from "./components/ScreenTwo";

const App = () => {

  const Stack = createNativeStackNavigator();
  
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="one" component={ScreenOne} />
        <Stack.Screen name="two" component={ScreenTwo} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
