import { StatusBar } from "expo-status-bar";
import {
  StyleSheet,
  Text,
  View,
  Image,
  TouchableOpacity,
  SafeAreaView,
  Button,
  Alert,
  Platform,
} from "react-native";

import { useDeviceOrientation } from "react-native-community/hooks";

export default function App() {
  // const {landscape} = useDeviceOrientation()
  const handlePress = () => {
    console.log("Press");
  };

  return (
    <SafeAreaView style={styles.container}>
      <Text onPress={handlePress}>Hello React native 12345</Text>
      {/* <Image source={require('./assets/icon.png')}/> */}
      <TouchableOpacity onPress={handlePress}>
        <Image
          source={{
            width: 200,
            height: 300,
            uri: "https://picsum.photos/200/300",
          }}
        />
      </TouchableOpacity>
      <StatusBar style="auto" />
      <Button title="Click me" onPress={() => alert("Click button")}></Button>
      <Button
        title="Click me to choose option"
        onPress={() =>
          Alert.alert("Title", "Message", [
            { text: "Yes", onPress: () => console.log("Yes") },
            { text: "No", onPress: () => console.log("No") },
          ])
        }
      ></Button>
      {/* Alert.prompt() not work in Android */}
      <Button
        title="Input text"
        onPress={() =>
          Alert.prompt("My title", "My message", (text) => console.log(text))
        }
      />
      <View style={{ backgroundColor: "red", width: "50%", height: 50 }}></View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "yellow",
    alignItems: "center",
    justifyContent: "center",
    // paddingTop: Platform.OS === "android" ? StatusBar.currentHeight + 20 : 0,
    paddingTop: Platform.OS === "android" ? 20 : 0,
  },
});
