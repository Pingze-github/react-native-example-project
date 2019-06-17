import React, { Component } from 'react'
import { TextInput, StyleSheet } from 'react-native'

const styles = StyleSheet.create({
  input: {
    height: 50,
    padding: 15,
    borderBottomWidth: 1,
    borderBottomColor: 'gainsboro',
  },
})

interface Props {
  onSubmit: Function,
  placeholder: string,
}

export default class Input extends Component<Props> {

  state = {
    text: '',
  }

  onChangeText = (text: string) => {
    this.setState({text})
  }

  onSubmitEditing = () => {
    const {onSubmit} = this.props
    const {text} = this.state

    if (!text) return

    onSubmit(text)
    this.setState({text: ''})
  }

  render() {
    const {placeholder} = this.props
    const {text} = this.state

    return (
      <TextInput
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
