import { StatusBar } from "expo-status-bar";
import { useState, useRef, useEffect } from "react";
import { Header, Text, ListItem } from "@rneui/base";
import Ionicons from "@expo/vector-icons/Ionicons";
import { SafeAreaProvider } from "react-native-safe-area-context";
import { TouchableOpacity, View } from "react-native";
import { Input } from "@rneui/themed";
export default function App() {
  const url = "http://192.168.242.254:4000/tasks";
  const [text, setText] = useState("");
  const [tasks, setTasks] = useState([]);
  useEffect(() => {
    (async () => {
      const res = await fetch(url);
      const data = await res.json();
      setTasks(data);
    })();
  }, []);
  const addTask = () => {
    if (!text) return false;
    const id = tasks[tasks.length - 1]._id + 1;
    setTasks([...tasks, { _id: id, subject: text, done: false }]);
    setText("");
  };
  const inputRef = useRef();
  return (
    <SafeAreaProvider>
      <View>
        <Header
          leftComponent={<Ionicons name="menu" size={24} />}
          centerComponent={
            <Text style={{ fontSize: 18, fontWeight: "bold" }}>
              Todo Native
            </Text>
          }
          rightComponent={
            <Ionicons
              name="checkmark-done"
              size={24}
              onPress={() => {
                setTasks(tasks.filter((task) => !task.done));
              }}
            />
          }
        />
        <View style={{ padding: 20 }}>
          <Input
            placeholder="New Task"
            value={text}
            onChangeText={setText}
            ref={inputRef}
            onSubmitEditing={() => addTask()}
            rightIcon={
              <TouchableOpacity onPress={() => addTask()}>
                <Ionicons name="add" size={24} />
              </TouchableOpacity>
            }
          />
        </View>
      </View>
      <View>
        {tasks
          .filter((item) => !item.done)
          .map((task) => (
            <ListItem key={task._id}>
              <TouchableOpacity
                onPress={() => {
                  setTasks(
                    tasks.map((item) => {
                      if (task._id === item._id) {
                        item.done = !item.done;
                      }
                      return item;
                    })
                  );
                }}
              >
                <Ionicons name="square-outline" size={24} />
              </TouchableOpacity>
              <ListItem.Content>
                <ListItem.Title>{task.subject}</ListItem.Title>
              </ListItem.Content>
              <TouchableOpacity
                onPress={() => {
                  setTasks(tasks.filter((item) => task._id !== item._id));
                }}
              >
                <Ionicons name="trash" size={24} />
              </TouchableOpacity>
            </ListItem>
          ))}
        {tasks
          .filter((item) => item.done)
          .map((task) => (
            <ListItem key={task._id}>
              <TouchableOpacity>
                <Ionicons
                  name="checkmark"
                  size={24}
                  onPress={() => {
                    setTasks(
                      tasks.map((item) => {
                        if (task._id === item._id) {
                          item.done = !item.done;
                        }
                        return item;
                      })
                    );
                  }}
                />
              </TouchableOpacity>
              <ListItem.Content>
                <ListItem.Title>{task.subject}</ListItem.Title>
              </ListItem.Content>
              <TouchableOpacity
                onPress={() => {
                  setTasks(tasks.filter((item) => task._id !== item._id));
                }}
              >
                <Ionicons name="trash" size={24} />
              </TouchableOpacity>
            </ListItem>
          ))}
      </View>
      <StatusBar style="auto" />
    </SafeAreaProvider>
  );
}
