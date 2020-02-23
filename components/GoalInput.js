import React, { useState } from "react";
import { View, TextInput, Button, StyleSheet, Modal } from "react-native";

const GoalInput = props => {
  const [enteredGoal, setEnteredGoal] = useState("");

  const goalInputHandler = enteredText => {
    setEnteredGoal(enteredText);
  };
  const addGoalHandler = () => {
    props.onAddGoal(enteredGoal);
    setEnteredGoal("");
  };

  return (
    <Modal visible={props.visible} animationType="slide">
      <View style={styles.inputContainer}>
        <TextInput
          placeholder="Course Goal"
          style={styles.input}
          onChangeText={goalInputHandler}
          value={enteredGoal}
        />
        <View style={styles.buttonsContainer}>
          <Button
            style={styles.buttonsStyle}
            title="Cancel"
            color="red"
            onPress={props.onCancel}
          />
          <Button
            style={styles.buttonsStyle}
            title="ADD"
            onPress={props.onAddGoal.bind(this, enteredGoal)}
          />
        </View>
      </View>
    </Modal>
  );
};

const styles = StyleSheet.create({
  inputContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center"
  },
  input: {
    width: "80%",
    borderColor: "black",
    marginBottom: 10,
    borderWidth: 1,
    padding: 10
  },
  buttonsContainer: {
    flexDirection: "row-reverse",
    justifyContent: "space-around",
    width: "60%"
  },
  buttonsStyle: {
    width: "40%"
  }
});

export default GoalInput;
