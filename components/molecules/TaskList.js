import { useEffect, useState } from "react";
import { Button, Icon, List, ListItem } from "@ui-kitten/components";
import { StyleSheet } from "react-native";
import { getToday } from "../../utils/date";
import { getTasks } from "../../services/tasks";

const data = new Array(10).fill({
  title: "Title for Item",
  description: getToday(),
});

const TaskList = ({ route }) => {
  const [tasks, setTasks] = useState([]);
  const newlyCreatedTask = route?.params || {};

  const populateTasks = async () => {
    const tasks = await getTasks();
    setTasks(tasks);
  };

  useEffect(() => {
    populateTasks();
  }, [newlyCreatedTask]);

  const renderItem = ({ item }) => {
    return (
      <ListItem
        title={item.name}
        key={item.id}
        description={item.date}
        accessoryLeft={(props) => (
          <Icon
            style={{ ...props.style, tintColor: "green" }}
            name="checkmark-circle-2"
          />
        )}
        accessoryRight={(props) => <Button size="tiny">DONE</Button>}
      />
    );
  };

  return <List style={styles.container} data={tasks} renderItem={renderItem} />;
};

const styles = StyleSheet.create({
  container: {
    // maxHeight: 192,
  },
});

export default TaskList;
