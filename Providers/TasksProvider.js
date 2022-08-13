import { createContext } from "react";

export const TasksContext = createContext({ tasks: [], setTasks: () => {} });

export const TasksProvider = TasksContext.Provider;
