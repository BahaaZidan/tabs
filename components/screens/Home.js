import { SafeAreaView } from "react-native";
import { Button, Layout } from "@ui-kitten/components";

export default function Home({ navigation }) {
  const navigateToLogin = () => {
    navigation.navigate("Login");
  };

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <Layout
        style={{ flex: 1, justifyContent: "center", alignItems: "center" }}
      >
        <Button onPress={navigateToLogin}>OPEN LOGIN</Button>
      </Layout>
    </SafeAreaView>
  );
}
