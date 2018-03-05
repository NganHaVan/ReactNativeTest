

import React,{Component} from 'react';
import {StyleSheet,View,Text,Image} from 'react-native';
import Button from 'react-native-button';
import {connect} from 'react-redux'; 
import {bindActionCreators} from 'redux';

import {increment,decrement} from '../Redux/actions/counterActions';
import {addSelection} from '../Redux/actions/selectionActions';

class Counter extends Component {
  static navigationOptions=({navigation})=>{
    let tabBarLabel="Counter";
    let tabBarIcon=()=>{
      return <Image source={require('../../Images/003-counter.png')}
      />
    }
    return {tabBarIcon,tabBarLabel}
  }

  handleIncrement=()=>{
    this.props.increment();
    // console.log('Increment');
  }

  handleDecrement=()=>{
    this.props.decrement();
    // console.log('Decrement');
  }

  handleAdd=(number)=>{
    this.props.addSelection(number);
    console.log(this.props);
    const {navigate}=this.props.navigation;
    navigate('Selection');
  }

  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.title}>This is counter app</Text>
        <View style={{flex:1,flexDirection:'row',justifyContent:'space-between',marginTop:10}}>
          <Button
            containerStyle={{padding:10, height:45, borderRadius:4, backgroundColor: '#00BFFF'}}
            style={styles.buttonStyle}
            onPress={()=>{this.handleIncrement()}}
          >
            Increment
          </Button>

          <Button
          containerStyle={{padding:10, height:45, borderRadius:4, backgroundColor: '#DC143C'}}
          style={styles.buttonStyle}
          onPress={()=>{this.handleDecrement()}}
          >
            Decrement
        </Button>
      </View>
      <View style={{flex:1,marginTop:10}}>
        <Text style={styles.counterText}>Counter number:{' '} <Text style={{color:'red',fontSize:20}}>{this.props.currentNumber}</Text></Text>
      </View>

      <View style={{flex:1,marginTop:10}}>
        <Text style={{alignSelf:'center'}}>Add this number to your selection</Text>
        <Button 
        containerStyle={{marginTop:10,padding:10, height:45, borderRadius:4, backgroundColor: '#228B22'}}
        style={styles.buttonStyle}
        onPress={()=>{this.handleAdd(this.props.currentNumber)}}
        >Add</Button>
      </View>

      </View>
    );
  }
}

const styles=StyleSheet.create({
  container:{
    flex:1,
    marginTop:20,
    padding:30
  },
  title:{
    fontSize:18,
    fontWeight:'bold',
  },
  buttonStyle:{
    color:'white'
  },
  counterText:{
    fontSize:14,
    fontWeight:'bold',
  }
})

const mapStateToProps=(state)=>{
  console.log(state);
  return {
    currentNumber:state.counterReducer
  }
}

const mapDispatchToProps=(dispatch)=>{
  return bindActionCreators({
    increment,
    decrement,
    addSelection
  },dispatch)
}

export default connect(mapStateToProps,mapDispatchToProps)(Counter)