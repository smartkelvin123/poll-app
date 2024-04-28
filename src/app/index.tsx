import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View, FlatList } from "react-native";
import { Stack } from "expo-router";

export default function HomeScreen() {
  const polls = [1, 2, 3, 4, 5];
  return (
    <>
      <Stack.Screen
        options={{
          title: "Home",
          headerStyle: {
            backgroundColor: "#fff",
          },
          headerTintColor: "#000",
          headerTitleStyle: {
            fontWeight: "bold",
          },
        }}
      />
      <View style={styles.container}>
        <FlatList
          data={polls}
          contentContainerStyle={{ gap: 5 }}
          renderItem={() => (
            <View>
              <Text>hello</Text>
            </View>
          )}
        />
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
