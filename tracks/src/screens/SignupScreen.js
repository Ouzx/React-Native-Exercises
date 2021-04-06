import React, { useContext, useEffect } from "react";
import { NavigationEvents } from "react-navigation";
import { View, StyleSheet } from "react-native";
import { Context as AuthContext } from "../context/AuthContext";
import NavLink from "../components/NavLink";
import AuthForm from "../components/AuthForm";

const SignupScreen = ({ navigation }) => {
  const { state, signup, clearErrorMessage, tryLocalSignIn } = useContext(
    AuthContext
  );

  useEffect(() => {
    tryLocalSignIn();
  }, []);

  return (
    <View style={styles.container}>
      <NavigationEvents onWillBlur={clearErrorMessage} />
      <AuthForm
        headerText="Sign Up for Tracker"
        errMessage={state.errMessage}
        submitButtonText="Sign Up"
        onSubmit={signup}
      />
      <NavLink
        routeName="Signin"
        text="Already have an account? Sign in instead"
      />
    </View>
  );
};

SignupScreen.navigationOptions = () => {
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

export default SignupScreen;
