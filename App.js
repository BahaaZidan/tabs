import { useEffect, useState } from "react";
import * as eva from "@eva-design/eva";
import { ApplicationProvider, IconRegistry } from "@ui-kitten/components";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { EvaIconsPack } from "@ui-kitten/eva-icons";

import Home from "./components/screens/Home";
import CreateTask from "./components/screens/CreateTask";
import { TasksProvider } from "./Providers/TasksProvider";
import { getTasks } from "./services/tasks";
import Archive from "./components/screens/DoneTasks";

const Stack = createNativeStackNavigator();

export default function App() {
  const [tasks, setTasks] = useState([]);

  const populateTasks = async () => {
    const tasks = await getTasks();
    setTasks(tasks);
  };

  useEffect(() => {
    populateTasks();
  }, []);

  return (
    <>
      <IconRegistry icons={EvaIconsPack} />
      <ApplicationProvider {...eva} theme={eva.light}>
        <TasksProvider value={{ tasks, setTasks }}>
          <NavigationContainer>
            <Stack.Navigator>
              <Stack.Screen name="Tasks" component={Home} />
              <Stack.Screen name="Create Task" component={CreateTask} />
              <Stack.Screen name="Done Tasks" component={Archive} />
            </Stack.Navigator>
          </NavigationContainer>
        </TasksProvider>
      </ApplicationProvider>
    </>
  );
}
