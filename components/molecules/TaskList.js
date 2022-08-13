import { useContext } from "react";
import { Button, Layout, List, ListItem, Text } from "@ui-kitten/components";
import { StyleSheet } from "react-native";
import { markTaskAsDone } from "../../services/tasks";
import { TasksContext } from "../../Providers/TasksProvider";
import { isToday } from "date-fns";

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
            alignItems: "center",
            padding: 4,
          }}
        >
          <Text category="s1" style={{}}>
            {item.name}
          </Text>
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
      data={tasks.filter((t) => t.done !== true && isToday(new Date(t.date)))}
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
