import { SafeAreaView } from "react-native";
import { Button, Layout } from "@ui-kitten/components";
import TaskList from "../molecules/TaskList";

export default function Home({ navigation }) {
  const navigateToLogin = () => {
    navigation.navigate("Create Task");
  };

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <Layout
        style={{
          flex: 1,
          // justifyContent: "center", alignItems: "center"
        }}
      >
        <TaskList />
        <Button onPress={navigateToLogin}>CREATE TASK</Button>
      </Layout>
    </SafeAreaView>
  );
}
