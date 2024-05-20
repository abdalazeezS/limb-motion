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
import MedicalHistory from './src/screens/MedicalHistory';

const Stack = createNativeStackNavigator();

export default function App() {
  const { t } = useTranslation();
  return (
    <Provider>
      <NavigationContainer>
        <Stack.Navigator initialRouteName={'Login'}>
          <Stack.Screen
            name="Home"
            component={Home}
            options={{
              headerTitle: t('PATIENTS'),
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
              headerTitle: t('Demographic Info'),
            }}
          />
          <Stack.Screen
            name="PreDash"
            component={PreDash}
            options={{
              headerTitle: t('Pre Dash'),
            }}
          />
          <Stack.Screen
            name="PostDash"
            component={PostDash}
            options={{
              headerTitle: t('Post Dash'),
            }}
          />
          <Stack.Screen
            name="MedicalHistory"
            component={MedicalHistory}
            options={{
              headerTitle: t('Medical History'),
            }}
          />
        </Stack.Navigator>
      </NavigationContainer>
    </Provider>
  );
}