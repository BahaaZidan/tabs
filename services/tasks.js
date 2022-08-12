import cuid from "cuid";

import { storeData, getAllKeys, getMultiple } from "../utils/async-storage";

const TASK_ID_PREFIX = "task-";

export async function getTasks() {
  const keys = await getAllKeys();
  const tasksKeys = keys.filter((k) => k.includes(TASK_ID_PREFIX));
  const result = await getMultiple(tasksKeys);
  return result;
}

export async function createTask(payload) {
  const id = cuid();
  const key = `${TASK_ID_PREFIX}${id}`;
  const task = {
    id: key,
    ...payload,
  };

  await storeData(key, task);
}
