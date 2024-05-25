import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import './src/i18n/i18n';
import Login from './src/screens/Login';
import Home from './src/screens/Home';
import { Provider } from 'react-native-paper';
import Demographic from './src/screens/Demographic';
import PreDash from './src/screens/PreDash';
import PostDash from './src/screens/PostDash';
import MedicalHistory from './src/screens/MedicalHistory';
import Sessions from './src/screens/Sessions';

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <Provider>
      <NavigationContainer>
        <Stack.Navigator initialRouteName={'Login'}>
          <Stack.Screen
            name="Home"
            component={Home}
            options={{
              headerTitle: 'Patients',
              headerBackVisible: false
            }}
          />
          <Stack.Screen
            name="Login"
            component={Login}
            options={{
              header: () => null,
            }}
          />

          <Stack.Screen
            name="Demographic"
            component={Demographic}
            options={{
              headerTitle: 'Demographic Info',
            }}
          />
          <Stack.Screen
            name="Sessions"
            component={Sessions}
            options={{
              headerTitle: 'Sessions',
            }}
          />
          <Stack.Screen
            name="PreDash"
            component={PreDash}
            options={{
              headerTitle: 'Pre Dash',
            }}
          />
          <Stack.Screen
            name="PostDash"
            component={PostDash}
            options={{
              headerTitle: 'Post Dash',
            }}
          />
          <Stack.Screen
            name="MedicalHistory"
            component={MedicalHistory}
            options={{
              headerTitle: 'Medical History',
            }}
          />
        </Stack.Navigator>
      </NavigationContainer>
    </Provider>
  );
}