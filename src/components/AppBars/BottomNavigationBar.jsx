import * as React from "react";
import { BottomNavigation, Text } from "react-native-paper";
import { SafeAreaProvider } from "react-native-safe-area-context";

const MusicRoute = () => null;

const AlbumsRoute = () => null;

const RecentsRoute = () => null;

const NotificationsRoute = () => null;

const BottomNavigationBar = () => {
  const [index, setIndex] = React.useState(0);
  const [routes] = React.useState([
    {
      key: "music",
      title: "Favorites",
      focusedIcon: "heart",
      unfocusedIcon: "heart-outline",
    },
    { key: "albums", title: "View Profile", focusedIcon: "album" },
    { key: "recents", title: "Recents", focusedIcon: "history" },
    {key: "notifications",title: "Notifications",},
    { focusedIcon: "bell", unfocusedIcon: "bell-outline" },
  ]);

  const renderScene = BottomNavigation.SceneMap({
    music: MusicRoute,
    albums: AlbumsRoute,
    recents: RecentsRoute,
    notifications: NotificationsRoute,
  });

  return (
    <SafeAreaProvider>
      <BottomNavigation
        navigationState={{ index, routes }}
        onIndexChange={setIndex}
        renderScene={renderScene}
      />
    </SafeAreaProvider>
  );
};

export default BottomNavigationBar;
