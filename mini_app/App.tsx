import React from "react";
import {StatusBar, StyleSheet, Text, View} from "react-native";
import {SafeAreaProvider, SafeAreaView} from "react-native-safe-area-context";
import {HStack} from "./src/component/primitive/Layout";
import {createBottomTabNavigator} from "@react-navigation/bottom-tabs";
import {createNativeStackNavigator, NativeStackNavigationProp} from "@react-navigation/native-stack";
import SplashScreen from "./src/screen/SplashScreen";
import LinearGradient from "react-native-linear-gradient";
import LoginScreen from './src/screen/LoginScreen';
import {NavigationContainer, useNavigation} from "@react-navigation/native";
import {Provider} from "react-redux";
import {store} from "./src/state/store";
import InterestScreen from "./src/screen/InterestScreen";
import IntroductionScreen from "./src/screen/IntroductionScreen";
import MainScreen from "./src/screen/MainScreen";
import ProductDetailScreen from "./src/screen/ProductDetailScreen";
import WishlistScreen from "./src/screen/WishlistScreen";
import NotificationScreen from "./src/screen/NotificationScreen";
import AccountScreen from "./src/screen/AccountScreen";
import {TabAccountIcon, TabHomeIcon, TabNotificationIcon, TabWishlistIcon} from "./src/component/TabIcon";
import {RootParamList} from "./src/typedef/NavigationType";

const Stack = createNativeStackNavigator<RootParamList>()
const Tab = createBottomTabNavigator<RootParamList>()

const App = () => {

    return (

        <Provider store={store}>

            <StatusBar barStyle={"dark-content"}/>

            <SafeAreaProvider>
                <NavigationContainer>
                    <NativeStackContent/>
                </NavigationContainer>
            </SafeAreaProvider>

        </Provider>
    )
}

const NativeStackContent: React.FC = () => {

    return (
        <Stack.Navigator initialRouteName="TabContent"
                         screenOptions={{
                             headerShown: false
                         }}
        >
            {/*STACK NAVIGATOR CONTENT (Intro)*/}
            <Stack.Screen name="Splash" component={SplashScreen}/>
            <Stack.Screen name="LoginScreen" component={LoginScreen}/>
            <Stack.Screen name="IntroductionScreen" component={IntroductionScreen}/>
            <Stack.Screen name="InterestScreen" component={InterestScreen}/>

            {/*STACK NAVIGATOR CONTENT (Entered)*/}
            <Stack.Screen name="ProductDetailScreen" component={ProductDetailScreen}/>

            {/*BOTTOM TAB CONTENT*/}
            <Stack.Screen name="TabContent" component={TabContent}/>

        </Stack.Navigator>
    )
}

const TabContent: React.FC = () => {

    const navigation = useNavigation<NativeStackNavigationProp<RootParamList>>()

    return (
        <Tab.Navigator initialRouteName="MainScreen"
                       screenOptions={({route}) => ({

                           headerShown: false,
                           tabBarShowLabel: false,
                           tabBarActiveTintColor: "#FF5454",

                           tabBarIcon: ({focused, color, size}) => {
                               if (route.name === "MainScreen") {
                                   return (
                                       <TabHomeIcon
                                           props={{
                                               focused: focused
                                           }}
                                           onPress={() => {
                                               navigation.navigate("MainScreen")
                                           }}
                                       />
                                   );
                               }
                               if (route.name === 'WishlistScreen') {
                                   return (
                                       <TabWishlistIcon
                                           props={{
                                               focused: focused
                                           }}
                                           onPress={() => {
                                               navigation.navigate("WishlistScreen")
                                           }}
                                       />
                                   );
                               }
                               if (route.name === 'NotificationScreen') {
                                   return (
                                       <TabNotificationIcon
                                           props={{
                                               focused: focused
                                           }}
                                           onPress={() => {
                                               navigation.navigate("NotificationScreen")
                                           }}
                                       />
                                   );
                               }
                               if (route.name === 'AccountScreen') {
                                   return (
                                       <TabAccountIcon
                                           props={{
                                               focused: focused
                                           }}
                                           onPress={() => {
                                               navigation.navigate("AccountScreen")
                                           }}
                                       />
                                   );
                               }
                           },
                       })}

        >

            <Tab.Screen name="MainScreen" component={MainScreen} />
            <Tab.Screen name="WishlistScreen" component={WishlistScreen}/>
            <Tab.Screen name="NotificationScreen" component={NotificationScreen}/>
            <Tab.Screen name="AccountScreen" component={AccountScreen}/>
        </Tab.Navigator>
    )
}

export default App
