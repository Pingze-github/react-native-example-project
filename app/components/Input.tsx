import React, { Component } from 'react'
import { StyleSheet } from 'react-native'

import { Input } from 'react-native-elements'

const styles = StyleSheet.create({
  input: {
    height: 42,
    paddingLeft: 20,
    borderBottomColor: 'gainsboro',
    borderBottomWidth: 1,
  },
})

interface Props {
  onSubmit: (text: string) => void,
  placeholder: string,
}

export default class MyInput extends Component<Props> {

  state = {
    text: '',
  }

  onChangeText = (text: string) => {
    this.setState({text})
  }

  onSubmitEditing = () => {
    const {onSubmit} = this.props
    const {text} = this.state

    if (!text) { return }

    onSubmit(text)
    this.setState({text: ''})
  }

  render() {
    const {placeholder} = this.props
    const {text} = this.state

    return (
      <Input
        style={styles.input}
        placeholder={placeholder}
        value={text}
        onChangeText={this.onChangeText}
        onSubmitEditing={this.onSubmitEditing}
        blurOnSubmit={true}
      />
    )
  }
}
