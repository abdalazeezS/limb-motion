import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import './src/i18n/i18n';
import Login from './src/screens/Login';
import Home from './src/screens/Home';
import { useTranslation } from 'react-i18next';
import { Provider } from 'react-native-paper';
import Demographic from './src/screens/Demographic';
import PreDash from './src/screens/PreDash';
import PostDash from './src/screens/PostDash';

const Stack = createNativeStackNavigator();

export default function App() {
  const { t } = useTranslation();
  return (
    <Provider>
      <NavigationContainer>
        <Stack.Navigator initialRouteName="Home">
          <Stack.Screen
            name="Home"
            component={Home}
            options={{
              headerTitle: t('PATIENTS'),
              headerBackVisible: false
            }}
          />
          <Stack.Screen
            name="Demographic"
            component={Demographic}
            options={{
              headerTitle: t('DEMOGRAPHIC'),
            }}
          />
          <Stack.Screen
            name="PreDash"
            component={PreDash}
            options={{
              headerTitle: t('PREDASH'),
            }}
          />
          <Stack.Screen
            name="PostDash"
            component={PostDash}
            options={{
              headerTitle: t('POSTDASH'),
            }}
          />
          <Stack.Screen
            name="Login"
            component={Login}
            options={{
              header: () => null,
            }}
          />
        </Stack.Navigator>
      </NavigationContainer>
    </Provider>
  );
}