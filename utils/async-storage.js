import AsyncStorage from "@react-native-async-storage/async-storage";

export const storeData = async (key, value) => {
  try {
    const jsonValue = JSON.stringify(value);
    await AsyncStorage.setItem(key, jsonValue);
  } catch (e) {
    console.error(e);
  }
};

export const getData = async (key) => {
  try {
    const jsonValue = await AsyncStorage.getItem(key);
    return JSON.parse(jsonValue);
  } catch (e) {
    console.error(e);
  }
};

export const getAllKeys = async () => {
  try {
    const keys = await AsyncStorage.getAllKeys();
    return keys;
  } catch (e) {
    console.error(e);
    return [];
  }
};

export const getMultiple = async (keys) => {
  try {
    const values = await AsyncStorage.multiGet(keys);
    const parsed = values.map((v) => JSON.parse(v[1]));
    return parsed;
  } catch (e) {
    console.error(e);
    return [];
  }
};

export const mergeItem = async (key, value) => {
  try {
    await AsyncStorage.mergeItem(key, JSON.stringify(value));
    const item = await getData(key);
    return item;
  } catch (e) {
    console.error(e);
  }
};

export const deleteItem = async (key) => {
  try {
    await AsyncStorage.removeItem(key);
  } catch (e) {
    console.error(e);
  }
};
