/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * Generated with the TypeScript template
 * https://github.com/emin93/react-native-template-typescript
 *
 * @format
 */

import React, { Component } from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { connect } from 'react-redux'
import Input from '../components/Input'
import List from '../components/List'
import actions from '../store/actions'
import { TODO } from '../store/models'

interface Props {
  todos: TODO[],
  dispatch: (action: any) => void,
}
class App extends Component<Props> {
  static navigationOptions = {
    title: `App`,
  }

  render() {
    const { todos } = this.props
    return (
      <View style={styles.container}>
        <Input
          placeholder={'新的待办项'}
          onSubmit={(text: string) => {
            this.props.dispatch(actions.addTodo(text))
          }}
        />
        <List
          items={todos}
          onRemoveItem={(index: number) => {
            this.props.dispatch(actions.removeTodo(index))
          }}
          onToggleItemCompleted={(index: number) => {
            this.props.dispatch(actions.toggleTodo(index))
          }}
        />
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
})

// 注入state到props
const mapStateToProps = (state: any) => ({
  todos: state.todos,
})

export default connect(mapStateToProps)(App)
