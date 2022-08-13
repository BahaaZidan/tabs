import { StyleSheet } from "react-native";
import { Formik } from "formik";
import * as Yup from "yup";
import {
  Button,
  Layout,
  Input,
  CheckBox,
  Datepicker,
  Text,
} from "@ui-kitten/components";
import { createTask } from "../../services/tasks";
import { useContext } from "react";
import { TasksContext } from "../../Providers/TasksProvider";

const CreateTaskSchema = Yup.object().shape({
  name: Yup.string()
    .min(2, "Too Short!")
    .max(50, "Too Long!")
    .required("Task name is required!"),
  date: Yup.date().required("Required"),
  recurring: Yup.boolean().required("Required"),
  persistent: Yup.boolean().required("Required"),
});

export default function Login({ navigation }) {
  const { setTasks } = useContext(TasksContext);

  const onSubmit = async (values) => {
    const newTask = await createTask(values);
    setTasks((oldTasks) => oldTasks.concat(newTask));
    navigation.navigate("Today's Tasks");
  };

  return (
    <Layout
      style={{
        flex: 1,
        justifyContent: "flex-start",
        alignItems: "flex-start",
        padding: 18,
      }}
    >
      <Formik
        initialValues={{
          name: "",
          date: new Date(),
          recurring: false,
          persistent: false,
        }}
        validationSchema={CreateTaskSchema}
        onSubmit={onSubmit}
      >
        {({
          handleChange,
          handleBlur,
          handleSubmit,
          setFieldValue,
          values,
          errors,
          touched,
        }) => (
          <>
            <Input
              onChangeText={handleChange("name")}
              onBlur={handleBlur("name")}
              value={values.name}
              placeholder={"Task name"}
              style={styles.inputFieldsCommon}
            />
            {errors.name && touched.name ? (
              <Text status="danger">{errors.name}</Text>
            ) : null}
            <Datepicker
              date={values.date}
              onSelect={(date) => {
                setFieldValue("date", date);
              }}
              min={new Date()}
              style={styles.inputFieldsCommon}
              label={"Due date"}
            />
            <CheckBox
              checked={values.recurring}
              onChange={(checked) => {
                setFieldValue("recurring", checked);
              }}
              onBlur={handleBlur("recurring")}
              style={styles.inputFieldsCommon}
            >
              Recurring
            </CheckBox>
            <CheckBox
              checked={values.persistent}
              onChange={(checked) => {
                setFieldValue("persistent", checked);
              }}
              onBlur={handleBlur("persistent")}
              style={styles.inputFieldsCommon}
            >
              Persistent
            </CheckBox>
            <Button onPress={handleSubmit}>Submit</Button>
          </>
        )}
      </Formik>
    </Layout>
  );
}

const styles = StyleSheet.create({
  inputFieldsCommon: {
    marginBottom: 12,
  },
});
