import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View, FlatList } from "react-native";
import { Stack, Link } from "expo-router";

export default function HomeScreen() {
  const polls = [{ id: 1 }, { id: 2 }, { id: 3 }];
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
          renderItem={({ item }) => (
            <Link href={`/polls/${item.id}`} style={styles.pollContainer}>
              <Text style={styles.pollTitle}>
                {item.id}: Example poll question
              </Text>
            </Link>
          )}
        />
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,
    gap: 5,
  },
  pollContainer: {
    backgroundColor: "white",
    padding: 10,
    borderRadius: 5,
  },
  pollTitle: {
    fontWeight: "bold",
    fontSize: 16,
  },
});
