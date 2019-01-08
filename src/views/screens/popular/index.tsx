import React from 'react'
import { Text, View } from 'react-native'
import { PopularScreenProps } from './props'
import { PopularScreenState } from './state'

export class PopularScreen extends React.Component<
  PopularScreenProps,
  PopularScreenState
> {
  constructor(props: PopularScreenProps) {
    super(props)
    this.state = {}
  }

  public render() {
    return (
      <View>
        <Text>PopularScreen</Text>
      </View>
    )
  }
}
