import React, { Component } from 'react'
import { View, StyleSheet, TouchableOpacity } from 'react-native'

const styles = StyleSheet.create({
  box: {
    height: 20,
    width: 20,
    borderWidth: 1,
    borderColor: '#A0A0A0',
  },
  inner: {
    flex: 1,
    margin: 4,
    backgroundColor: '#A0A0A0',
  },
})

interface Props{
  isChecked: boolean
  onToggle: any
}

export default class Checkbox extends Component<Props> {
  render() {
    const {onToggle, isChecked} = this.props
    console.log("CHECKBOX", isChecked)
    // 使用<View>和样式，可以构造图形
    return (
      <TouchableOpacity onPress={onToggle}>
        <View style={styles.box}>
          { isChecked && <View style={styles.inner}/> }
        </View>
      </TouchableOpacity>
    )
  }
}
