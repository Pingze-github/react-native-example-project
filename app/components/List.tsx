import React, { Component } from 'react'
import {
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native'

import Checkbox from './Checkbox'

const styles = StyleSheet.create({
  container: {
  },
  item: {
    padding: 15,
    flexDirection: 'row',
    justifyContent: 'space-between',
    borderBottomWidth: 1,
    borderBottomColor: 'whitesmoke',
  },
  rightSection: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  remove: {
    marginLeft: 10,
    marginBottom: 2,
    color: '#CD5C5C',
    fontSize: 26,
  },
  completed: {
    color: 'gray',
    backgroundColor: '#F3F3F3',
  },
})

interface Props {
  items: any[],
  onRemoveItem: (index: number) => void,
  onToggleItemCompleted: (index: number) => void,
}

export default class List extends Component<Props> {

  renderItem = (item: any, i: number) => {
    const {onToggleItemCompleted, onRemoveItem} = this.props
    return (
      <View key={i} style={item.completed ? [styles.item, styles.completed] : styles.item}>
        <Text style={item.completed ? { color: 'gray' } : { color: 'black'}}> {item.text} </Text>
        <View style={styles.rightSection}>
          <Checkbox
            isChecked={item.completed}
            onToggle={() => onToggleItemCompleted(i)}
          />
          <TouchableOpacity onPress={() => onRemoveItem(i)}>
            <Text style={styles.remove}> &times; </Text>
          </TouchableOpacity>
        </View>
      </View>
    )
  }

  render() {
    const {items} = this.props
    return (
      <View>
        <ScrollView style={styles.container}>
          {items.map(this.renderItem)}
        </ScrollView>
      </View>
    )
  }
}
