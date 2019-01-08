import React from 'react'
import { Text, View } from 'react-native'
import { CategoriesScreenProps } from './props'
import { CategoriesScreenState } from './state'

export class CategoriesScreen extends React.Component<
  CategoriesScreenProps,
  CategoriesScreenState
> {
  constructor(props: CategoriesScreenProps) {
    super(props)
    this.state = {}
  }

  public render() {
    return (
      <View>
        <Text>CategoriesScreen</Text>
      </View>
    )
  }
}
