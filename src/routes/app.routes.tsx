import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { PlusCircle, SoccerBall, FileSearch } from 'phosphor-react-native';
import { useTheme } from 'native-base';
import { Platform } from 'react-native';

import { New } from './../screens/New';
import { Pools } from './../screens/Pools';
import { Find } from '../screens/Find';

const { Navigator, Screen } = createBottomTabNavigator();

export function AppRoutes() {
    const { colors, sizes } = useTheme();
    const size =  sizes[6];
 return(
  <Navigator screenOptions={{
   headerShown: false,
   tabBarLabelPosition: "beside-icon",
   tabBarActiveTintColor: colors.yellow[500],
   tabBarInactiveTintColor: colors.gray[500],
   tabBarStyle: {
    position:"absolute",
    height: 87,
    borderTopWidth:0,
    backgroundColor: colors.gray[800],
   },
   tabBarItemStyle: {
    position: "relative",
    top:Platform.OS === 'android' ? -10 : 0,
   },
  }}

  >
   <Screen 
    name='Novo'
    component={New}
    options={{
        tabBarIcon: ({ color }) => <PlusCircle color={color} size={size} />,
        tabBarLabel: "Novo balão",
    }}
   />

<Screen 
    name='Pools'
    component={Pools}
    options={{
        tabBarIcon: ({ color }) => <SoccerBall color={color} size={size}  />,
        tabBarLabel: "Meus Balões",
    }}
   />

<Screen 
    name='Find'
    component={Find}
    options={{ tabBarButton: () => null }}
   />
  </Navigator>
 ) 
}
