import * as React from "react";
import { View, Text } from "react-native";

import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Ionicons from "react-native-vector-icons/Ionicons";
import { COLORS, FONTS, SIZES, icons, } from './design.js';
import {
    SafeAreaView,
    StyleSheet,
    ScrollView,
    StatusBar,
    Image,
    ImageBackground,
    TouchableOpacity,
    FlatList,
    Animated,
    Platform
} from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';

//Screens
import HomeScreen from "./HomeScreen.js";
import Calculator from "./fourthPage.js";
import Expense from "./secondPage.js";
// Screen Names
const homeName = "Home";
const calculatorName = "Calculator";
const expenseName = "Expense"
const Tab = createBottomTabNavigator();

export default function MainContainer() {
  return (
    <NavigationContainer>

        <View style={styles.container}>
              <TouchableOpacity style={styles.button}>
                <MaterialIcons name="mic" size={24} color="white" />
              </TouchableOpacity>
            </View>

      <View
                style={{
                    flexDirection: 'row',
                    height: 80,
                    justifyContent: 'space-between',
                    alignItems: 'flex-end',
                    paddingHorizontal: SIZES.padding,
                    backgroundColor: COLORS.white,
                }}
            >
                <TouchableOpacity
                    style={{ justifyContent: 'center', width: 50, }}
                    onPress={() => console.log('Go Back')}
                >
                    <Image
                        source={require('../assets/icons/back_arrow_icon.png')}
                        style={{
                            width: 30,
                            height: 30,
                            tintColor: COLORS.primary
                        }}
                    />
                </TouchableOpacity>

                <TouchableOpacity
                    style={{ justifyContent: 'center', alignItems: 'flex-end', width: 50 }}
                    onPress={() => console.log('More')}
                >
                    <Image
                        source={require('../assets/icons/more_icon.png')}
                        style={{
                            width: 30,
                            height: 30,
                            tintColor: COLORS.primary
                        }}
                    />
                </TouchableOpacity>
            </View>  
      <Tab.Navigator
        initialRouteName={homeName}
        screenOptions={({ route }) => ({
          tabBarIcon: ({ focused, color, size }) => {
            let iconName;
            let rn = route.name;

            if (rn === homeName) {
              iconName = focused ? "home" : "home-outline";
            } 
            // else if (rn === calculatorName) {
            //   iconName = focused ? "calculator" : "calculator-outline";
            // }
            else if(rn == expenseName){
                iconName = focused ? "journal" : "journal-outline";
            }

            return <Ionicons name={iconName} size={size} color={color} />;
          },
        })}
      >
        <Tab.Screen name={homeName} component={HomeScreen} />
        {/* <Tab.Screen name={calculatorName} component={Calculator} /> */}
        <Tab.Screen name={expenseName} component={Expense} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
    shadow: {
        shadowColor: "#000",
        shadowOffset: {
            width: 2,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
        elevation: 3,
    },
    container: {
        flex: 1,
        position: 'absolute',
        bottom: 25,
        right: 170,
      },
      button: {
        backgroundColor: 'blue',
        borderRadius: 50,
        width: 50,
        height: 50,
        alignItems: 'center',
        justifyContent: 'center',
        elevation: 4,
      },
})