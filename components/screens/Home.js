import { SafeAreaView } from "react-native";
import { Button, Layout } from "@ui-kitten/components";
import TaskList from "../molecules/TaskList";

export default function Home({ navigation }) {
  const navigateToCreateTask = () => {
    navigation.navigate("Create Task");
  };

  const navigateToArchive = () => {
    navigation.navigate("Done Tasks");
  };

  const navigateToMissed = () => {
    navigation.navigate("Missed Tasks");
  };

  const navigateToUpcoming = () => {
    navigation.navigate("Upcoming Tasks");
  };

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <Layout
        style={{
          flex: 1,
        }}
      >
        <TaskList />
        <Button
          onPress={navigateToCreateTask}
          style={{ borderRadius: 0, marginBottom: 10 }}
        >
          CREATE TASK
        </Button>
        <Button
          onPress={navigateToArchive}
          appearance="outline"
          style={{ borderRadius: 0 }}
        >
          DONE TASKS
        </Button>
        <Button
          onPress={navigateToMissed}
          appearance="outline"
          style={{ borderRadius: 0 }}
        >
          MISSED TASKS
        </Button>
        <Button
          onPress={navigateToUpcoming}
          appearance="outline"
          style={{ borderRadius: 0 }}
        >
          UPCOMING TASKS
        </Button>
      </Layout>
    </SafeAreaView>
  );
}
