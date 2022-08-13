import { useContext } from "react";
import { Button, Layout, List, ListItem, Text } from "@ui-kitten/components";
import { StyleSheet } from "react-native";
import { markTaskAsDone } from "../../services/tasks";
import { TasksContext } from "../../Providers/TasksProvider";

const TaskList = () => {
  const { tasks, setTasks } = useContext(TasksContext);

  const handleDone = (id) => async () => {
    const newTask = await markTaskAsDone(id);
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
          <Button size="tiny" onPress={handleDone(item.id)}>
            DONE
          </Button>
        </Layout>
      </ListItem>
    );
  };

  return (
    <List
      style={styles.container}
      data={tasks.filter((t) => t.done !== true)}
      renderItem={renderItem}
    />
  );
};

const styles = StyleSheet.create({
  container: {
    // maxHeight: 192,
  },
});

export default TaskList;
