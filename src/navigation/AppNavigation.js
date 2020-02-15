import { createAppContainer } from "react-navigation";
import { createStackNavigator } from "react-navigation-stack";
import { PLatform } from "react-native";
import { MainScreen } from "../screens/MainScreen";
import { PostScreen } from "../screens/PostScreen";
import { THEME } from "../theme";

const PostNavigator = createStackNavigator(
  {
    Main: MainScreen,
    Post: {
      screen: PostScreen
    }
  },
  {
    initialRouteName: "Main",
    defaultNavigationOptions: {
      headerStyle: {
        backgroundColor: PLatform.OS === "android" ? THEME.MAIN_COLOR : "#fff"
      },
      headerTintColor: PLatform.OS === "android" ? "#fff" : THEME.MAIN_COLOR
    }
  }
);

export const AppNavigation = createAppContainer(PostNavigator);
