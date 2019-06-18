import React, { Component } from 'react'
import { StyleSheet, TouchableOpacity, View } from 'react-native'

const styles = StyleSheet.create({
  box: {
    borderColor: '#A0A0A0',
    borderWidth: 1,
    height: 20,
    width: 20,
  },
  inner: {
    backgroundColor: '#A0A0A0',
    flex: 1,
    margin: 4,
  },
})

interface Props {
  isChecked: boolean
  onToggle: any
}

export default class MyCheckbox extends Component<Props> {
  props: Props

  render() {
    const {onToggle, isChecked} = this.props
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
