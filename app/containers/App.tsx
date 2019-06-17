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
import List from '../components/List'
import Input from '../components/Input'
import actions from '../store/actions'

interface Props {
  todos: any,
  dispatch: Function,
}
class App extends Component<Props> {

  render() {
    const { todos } = this.props

    // const todos = [{text: '第一项'}]

    console.log('App.render', todos)

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
  }
})



// 注入state到props
const mapStateToProps = (state: any) => ({
  // store里需要定义items，在store/index中看到
  todos: state.todos,
})

// 将UI组件变成容器组件
export default connect(mapStateToProps)(App)

