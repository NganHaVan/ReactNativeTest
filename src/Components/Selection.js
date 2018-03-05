import React,{Component} from 'react';
import {View,Text,Image,FlatList} from 'react-native';
import Button from 'react-native-button';

import { connect } from 'react-redux';
import {bindActionCreators} from 'redux';

import Item from './Item';
import {deleteSelection} from '../Redux/actions/selectionActions';

class EmptyItem extends Component{
  render(){
    return <View>
    <Text style={{color:'red',alignSelf:'center'}}>Your selection is empty</Text>
    </View>
  }
}


class Selection extends Component {
  static navigationOptions=({navigation})=>{
    let tabBarLabel="Your selection";
    let tabBarIcon=()=>{
      return <Image source={require('../../Images/001-font-selection-editor.png')}
      />
    }
    return {tabBarIcon,tabBarLabel}
  }
  
  render() {
    let list=this.props.numberList;
    return (
      <View style={{marginTop:40}}>
        {(list.length===0) ? <EmptyItem/> : 
          <View>
          <Text style={{alignSelf:'center',fontSize:18,fontWeight:'bold',marginBottom:20}}>User's selection</Text>
          <FlatList data={this.props.numberList}
          renderItem={({item,index})=>{
            return <Item key={index} {...item}/> 
          }}
          keyExtractor={(item,index)=>index}
        />
            </View>
          }
      </View>
    );
  }
}

const mapStateToProps=(state)=>{
  return {
    numberList:state.selectionReducer
  }
}

export default connect(mapStateToProps)(Selection);
