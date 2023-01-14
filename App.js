import { StyleSheet, Text, View , Image , TouchableOpacity} from 'react-native';
import {createStackNavigator} from "@react-navigation/stack";
import {NavigationContainer , DefaultTheme} from "@react-navigation/native";
import {icons , COLORS , FONTS , images , SIZES} from './constants'

import {Home} from './screens';

const theme = {
  colors:{
    ...DefaultTheme.colors ,
  border:"transparent"
  }
}

const Stack = createStackNavigator();

const App = () => {
  return (
    <NavigationContainer theme={theme} >
        <Stack.Navigator
        initialRouteName={"Home"}
        >
          <Stack.Screen
          name="Home"
          component={Home}
          options={{
            title:"SHOW SELECTOR",
            headerTintColor:COLORS.lightGray,
            headerTitleStyle:{
              ...FONTS.navTitle
            },
            headerLeft:({onPress}) => (
              <TouchableOpacity
              style={{marginLeft:SIZES.padding}}
              onPress = {onPress}
              >
                <Image
                source={icons.menu}
                resizeMode="contain"
                style={{
                  width:25,
                  height:25
                }}
                />
              </TouchableOpacity>
            ),
            headerRight : () => (
              <TouchableOpacity
              style={{marginRight:SIZES.padding}}
              onPress={()=> console.log("search")}
              >
                <Image
                source={icons.search}
                resizeMode="contain"
                style={{
                  width:30,
                  height:30
                }}
                />
              </TouchableOpacity>
            )
          }}

          />
        </Stack.Navigator>
    </NavigationContainer>
  );
}

export default ()=>{
  return(
    <App/>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
