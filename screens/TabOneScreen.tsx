import { StyleSheet, TouchableOpacity } from "react-native";
import { useDispatch, useSelector } from "react-redux";
import { Text, View } from "../components/Themed";
import { decrement, increment, selectCount } from "../store/counterSlice";
import { themeSelector, toggleMode } from "../store/themeSlice";
import { RootTabScreenProps } from "../types";

export default function TabOneScreen({
  navigation,
}: RootTabScreenProps<"TabOne">) {
  const disPatch = useDispatch();
  const countValue = useSelector(selectCount);
  const mode = useSelector(themeSelector);
  const bgColor = mode === "light" ? "white" : "black";
  const textColor = mode === "light" ? "black" : "black";
  console.log(textColor);

  return (
    <View style={[styles.container, { backgroundColor: bgColor }]}>
      <View style={{ flexDirection: "row" }}>
        <TouchableOpacity onPress={() => disPatch(toggleMode("light"))}>
          <Text
            style={{
              fontSize: 18,
              borderWidth: 1,
              borderColor: "#cfcfcf",
              padding: 15,
              color: "black",
            }}
          >
            Light
          </Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => disPatch(toggleMode("dark"))}>
          <Text
            style={{
              fontSize: 18,
              borderWidth: 1,
              borderColor: "#cfcfcf",
              padding: 15,
              color: textColor,
            }}
          >
            Dark
          </Text>
        </TouchableOpacity>
      </View>
      <Text style={[styles.title, { color: textColor }]}>
        Count: {countValue}
      </Text>
      <View style={{ flexDirection: "row", marginTop: 20 }}>
        <TouchableOpacity
          onPress={() => disPatch(increment())}
          style={{ marginRight: 20 }}
        >
          <Text
            style={{
              fontSize: 18,
              borderWidth: 1,
              borderColor: "#cfcfcf",
              padding: 15,
              color: textColor,
            }}
          >
            Increment
          </Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => disPatch(decrement())}>
          <Text
            style={{
              fontSize: 18,
              borderWidth: 1,
              borderColor: "#cfcfcf",
              padding: 15,
              color: textColor,
            }}
          >
            Decrement
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  title: {
    fontSize: 20,
    fontWeight: "bold",
    marginTop: 50,
  },
  separator: {
    marginVertical: 30,
    height: 1,
    width: "80%",
  },
});
