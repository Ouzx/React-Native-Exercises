import React, { useContext } from "react";
import { View, StyleSheet } from "react-native";
import { Context } from "../context/AuthContext";
import AuthForm from "../components/AuthForm";
import Navlink from "../components/NavLink";
const SigninScreen = () => {
  const { state, signin, clearErrorMessage } = useContext(Context);
  return (
    <View style={styles.container}>
      <AuthForm
        headerText="Sign In to Your Account"
        errMessage={state.errMessage}
        onSubmit={signin}
        submitButtonText="Sign In"
      />
      <Navlink
        text="Don't you have an account? Sign up instead"
        routeName="Signup"
        clear={clearErrorMessage}
      />
    </View>
  );
};

SigninScreen.navigationOptions = () => {
  return {
    headerShown: false,
  };
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    marginBottom: 200,
  },
});

export default SigninScreen;
