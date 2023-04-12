import React, { useState } from "react";
import { ScrollView, StyleSheet, Text, TextInput, View } from "react-native";

import { Colors } from "../../constants/colors";
import ImagePicker from "./ImagePicker";
import LocationPicker from "./LocationPicker";
import Button from "../UI/Button";

import { Place } from "../../model/place";

function PlaceForm({ onCreatePlace }) {
  const [enteredTitle, setenteredTitle] = useState("");
  // const [pickLocation, setPickLocation] = useState("");
  const [selectedImage, setSelectedImage] = useState("");

  function changeTitleHandler(enteredText) {
    setenteredTitle(enteredText);
  }

  // function pickLocationHandler(location) {
  //   setPickLocation(location)
  // }

  function takeImageHandler(imageUri) {
    setSelectedImage(imageUri);
  }

  function savePlaceHandler() {
    const data = new Place(enteredTitle, selectedImage);
    onCreatePlace(data);
  }

  return (
    <ScrollView style={styles.form}>
      <View>
        <Text style={styles.label}>Title</Text>
        <TextInput
          style={styles.input}
          onChangeText={changeTitleHandler}
          value={enteredTitle}
        />
      </View>
      <ImagePicker onTakeImage={takeImageHandler} />
      <LocationPicker />
      <Button onPress={savePlaceHandler}>Add Place</Button>
    </ScrollView>
  );
}

export default PlaceForm;

const styles = StyleSheet.create({
  form: {
    flex: 1,
    padding: 24,
  },
  label: {
    fontWeight: "bold",
    marginBottom: 4,
    color: Colors.primary500,
  },
  input: {
    marginVertical: 8,
    paddingHorizontal: 4,
    paddingVertical: 8,
    fontSize: 16,
    borderBottomColor: Colors.primary700,
    backgroundColor: Colors.primary100,
  },
});
