import * as React from "react";
import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View, Modal } from "react-native";
import { CalendarList } from "react-native-calendars";
import { LinearGradient } from "expo-linear-gradient";
import { LineChart } from "react-native-chart-kit";
import { Dimensions, ScrollView, SafeAreaView } from "react-native";
import { TouchableOpacity, useNavigation } from "@react-navigation/native";

function HomeScreen({ navigation }) {

  // const navigateToSecondPage=()=>{
  //   navigate.navigate('secondPage');
  // }
  // const navigate = useNavigation();

  return (
    
    <View
      onPress={() => navigation.navigate("Home")}
      style={{ flex: 1, alignItems: "center", justifyContent: "center" }}
    >
        <LinearGradient colors={["#fff", "#B9D9FF"]}>
      <SafeAreaView>
        <ScrollView>
          
            <Text
              style={{
                fontSize: 28,
                position: "relative",
                marginTop: 35,
                marginLeft: 50,
                marginBottom: 30
              }}
            >
              Overview
            </Text>
            <Text
              style={{
                fontSize: 28,
                position: "relative",
                margin: 0,
                marginLeft: 65
              }}
            >
              This Month
            </Text>
            <Text
              style={{
                fontSize: 28,
                position: "relative",
                margin: 2,
                marginLeft: 65
              }}
            >
              ₱ 6,000
            </Text>
            <LineChart
              data={{
                labels: [
                  "Week 1",
                  "Week 2",
                  "Week 3",
                  "Week 4",
                ],
                datasets: [
                  {
                    data: [
                      Math.random() * 5,
                      Math.random() * 5,
                      Math.random() * 5,
                      Math.random() * 5,
                    ],
                  },
                ],
              }}
              width={Dimensions.get("window").width} // from react-native
              height={220}
              yAxisLabel="₱"
              yAxisSuffix="k"
              yAxisInterval={1} // optional, defaults to 1
              chartConfig={{
                //opacity: 0.2,
                backgroundColor: "#000",
                backgroundGradientFrom: 'rgba(0, 0, 0, 0.2)',
                backgroundGradientTo: 'rgba(0, 0, 0, 0.1)',
                decimalPlaces: 2, // optional, defaults to 2dp
                color: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`,
                labelColor: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`,
                style: {
                  borderRadius: 8,
                },
                propsForDots: {
                  r: "6",
                  strokeWidth: "2",
                  stroke: "#ffa726",
                },
              }}
              bezier
              style={{
                marginVertical: 8,
                borderRadius: 8,
                opacity: 0.4,
                margin: 30,
              }}
            />
          {/* <TouchableOpacity onPress={() => navigation.navigate("secondPage")}> */}
            <CalendarList
            
              theme={{
                monthTextColor: "#000",
                
                textMonthFontWeight: "bold",
              }}
              style={{
                backgroundColor: "gray",
                borderWidth: 1,
                borderRadius: 15,
                elevation: 6,
                marginTop: 6,
              }}
              horizontal={true}
              pagingEnabled={true}
            />
            {/* </TouchableOpacity> */}
          
        </ScrollView>
      </SafeAreaView>
    </LinearGradient></View>
  );
}

export default HomeScreen;