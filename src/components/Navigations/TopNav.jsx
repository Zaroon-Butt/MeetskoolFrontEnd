import * as React from "react";
import { Appbar } from "react-native-paper";
import { SafeAreaProvider } from "react-native-safe-area-context";

const TopNav = () => (
  <SafeAreaProvider>
    <Appbar.Header style={{ backgroundColor: "#f3e5f5" }}>
      <Appbar.BackAction onPress={() => {}} />
      <Appbar.Content title="Meetskool" />
      <Appbar.Action icon="calendar" onPress={() => {}} />
      <Appbar.Action icon="dots-vertical" onPress={() => {}} />
    </Appbar.Header>
  </SafeAreaProvider>
);

export default TopNav;
