import React, { Component } from "react";
import { View, Text } from "react-native";
import Button from "react-native-button";

import { connect } from "react-redux";
import { bindActionCreators } from "redux";

import { deleteSelection } from "../Redux/actions/selectionActions";

class Item extends Component {
  handleDelete = selectedId => {
    this.props.deleteSelection(selectedId);
  };
  render() {
    return (
      <View
        style={{
          flex: 1,
          flexDirection: "row",
          backgroundColor: "#FFEFD5",
          borderBottomWidth: 2,
          borderBottomColor: "black",
          padding: 5
        }}
      >
        <Text style={{ flex: 3 }}> {this.props.number} </Text>
        <Button
          containerStyle={{
            padding: 10,
            borderRadius: 4,
            overflow: "hidden",
            backgroundColor: "#00BFFF",
            width: "auto"
          }}
          style={{ color: "white", flex: 1 }}
          onPress={() => {
            this.handleDelete(this.props.numberId);
          }}
        >
          Delete
        </Button>
      </View>
    );
  }
}

const mapDispatchToProps = dispatch => {
  return bindActionCreators(
    {
      deleteSelection
    },
    dispatch
  );
};

export default connect(null, mapDispatchToProps)(Item);
