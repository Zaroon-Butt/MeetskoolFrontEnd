import * as React from "react";
import { Appbar, Drawer } from "react-native-paper";
import { SafeAreaProvider } from "react-native-safe-area-context";
import { View, StyleSheet } from "react-native";
import { NavigationProp, useNavigation } from "@react-navigation/native";

const TopNav: React.FC = () => {
  const [drawerVisible, setDrawerVisible] = React.useState(false);
  const navigation: NavigationProp<any, any> = useNavigation();

  const toggleDrawer = () => {
    setDrawerVisible(!drawerVisible);
  };

  return (
    <SafeAreaProvider>
      <Appbar.Header style={{ backgroundColor: "white" }}>
        <Appbar.BackAction onPress={() => {}} />
        <Appbar.Content title="Meetskool" />
        <Appbar.Action icon="dots-vertical" onPress={toggleDrawer} />
      </Appbar.Header>
      {drawerVisible && (
        <View style={styles.drawerContainer}>
          <Drawer.Section title="Menu">
            <Drawer.Item
              label="Change Password"
              icon="key"
              onPress={() => navigation.navigate("Chatting") as never}
            />
            <Drawer.Item
              label="Logout"
              icon="power"
              onPress={() => navigation.navigate("Chatting") as never}
            />
          </Drawer.Section>
        </View>
      )}
    </SafeAreaProvider>
  );
};

const styles = StyleSheet.create({
  drawerContainer: {
    position: "absolute",
    top: 60, // adjust based on Appbar.Header height
    right: 0,
    backgroundColor: "white",
    width: 250, // adjust width as needed
    borderColor: "#ccc",
    borderWidth: 1,
    zIndex: 1000, // to ensure it is above other elements
  },
});

export default TopNav;
