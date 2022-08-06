import { Button, Layout } from "@ui-kitten/components";

export default function Login({ navigation }) {
  const navigateToHome = () => {
    navigation.navigate("Home");
  };

  return (
    <Layout style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      <Button onPress={navigateToHome}>Login via Google</Button>
    </Layout>
  );
}
