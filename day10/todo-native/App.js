import { StatusBar } from "expo-status-bar";
import { useState } from "react";
import {
  Button,
  SafeAreaView,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";

export default function App() {
  const [tasks, setTasks] = useState([
    { _id: 1, subject: "Milk", done: false },
    { _id: 2, subject: "Orange", done: false },
    { _id: 3, subject: "Mango", done: false },
    { _id: 4, subject: "Banana", done: false },
  ]);
  const [text, setText] = useState("");

  const addTask = () => {
    if (!text) return false;
    const id = tasks[tasks.length - 1].id + 1;
    setTasks([...tasks, { _id: id, subject: text, done: false }]);
    setText("");
  };
  return (
    <SafeAreaView>
      <View style={styles.container}>
        <View style={styles.header}>
          <Text style={styles.title}>Todos</Text>
        </View>
        <View style={styles.form}>
          <TextInput
            placeholder="New Task"
            style={styles.input}
            value={text}
            onChangeText={setText}
          />
          <Button title="ADD" onPress={addTask} />
        </View>
      </View>
      <View>
        {tasks.map((task) => (
          <View style={styles.listItem} key={task._id}>
            <Text style={{ fontSize: 18 }}>{task.subject}</Text>
            <TouchableOpacity
              onPress={() => {
                setTasks(tasks.filter((item) => task._id !== item._id));
              }}
            >
              <Text style={{ color: "brown", fontSize: 18 }}>Del</Text>
            </TouchableOpacity>
          </View>
        ))}
      </View>
      <StatusBar style="auto" />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    alignSelf: "center",
  },
  header: {
    alignItems: "center",
    backgroundColor: "skyblue",
    paddingTop: 35,
    padding: 20,
    marginBottom: 20,
  },
  title: {
    fontSize: 21,
    fontWeight: "bold",
    // color: "white",
  },
  form: {
    flexDirection: "row",
    backgroundColor: "gray",
    padding: 10,
  },
  input: {
    fontSize: 18,
    flexGrow: 1,
  },
  listItem: {
    padding: 10,
    marginBottom: 4,
    borderWidth: 1,
    borderColor: "black",
    flexDirection: "row",
    justifyContent: "space-between",
  },
});
