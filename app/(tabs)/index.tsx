import { Text, TouchableOpacity, View } from "react-native";
import { styles } from "../../styles/auth.styles";

export default function Index() {
  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={() => alert("Hi")}>
        <Text style={{ color: "blue", fontSize: "30" }}>Hello Shivalli</Text>
      </TouchableOpacity>
    </View>
  );
}
