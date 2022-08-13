import { useContext } from "react";
import { SafeAreaView } from "react-native";
import { Button, Layout, List, ListItem, Text } from "@ui-kitten/components";

import { TasksContext } from "../../Providers/TasksProvider";
import { undoTask } from "../../services/tasks";
import { isBefore, startOfToday } from "date-fns";

export default function MissedTasks() {
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <Layout
        style={{
          flex: 1,
        }}
      >
        <TaskList />
      </Layout>
    </SafeAreaView>
  );
}

const TaskList = () => {
  const { tasks, setTasks } = useContext(TasksContext);

  const handleUndo = (id) => async () => {
    const newTask = await undoTask(id);
    setTasks(tasks.filter((t) => t.id !== newTask.id).concat(newTask));
  };

  const renderItem = ({ item }) => {
    return (
      <ListItem key={item.id} disabled>
        <Layout
          style={{
            flex: 1,
            flexDirection: "row",
            justifyContent: "space-between",
            padding: 4,
          }}
        >
          <Layout style={{ backgroundColor: "transparent" }}>
            <Text category="s1" style={{}}>
              {item.name}
            </Text>
            <Text appearance="hint" category="c1">
              {new Date(item.date).toLocaleDateString()}
            </Text>
          </Layout>
          <Button
            size="tiny"
            onPress={handleUndo(item.id)}
            appearance="outline"
          >
            UNDO
          </Button>
        </Layout>
      </ListItem>
    );
  };

  return (
    <List
      style={{}}
      data={tasks
        .filter((t) => t.done !== true)
        .filter((t) => isBefore(new Date(t.date), startOfToday()))
        .sort((a, b) => new Date(a.date) - new Date(b.date))}
      renderItem={renderItem}
    />
  );
};
