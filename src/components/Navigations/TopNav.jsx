import * as React from "react";
import { Appbar } from "react-native-paper";
import { SafeAreaProvider } from "react-native-safe-area-context";

const TopNav = () => (
  <SafeAreaProvider>
    <Appbar.Header style={{ backgroundColor: "white" }}>
      <Appbar.BackAction onPress={() => {}} />
      <Appbar.Content title="Meetskool" />
      <Appbar.Action icon="Search" onPress={() => {}} />
      <Appbar.Action icon="dots-vertical" onPress={() => {}} />
    </Appbar.Header>
  </SafeAreaProvider>
);

export default TopNav;
