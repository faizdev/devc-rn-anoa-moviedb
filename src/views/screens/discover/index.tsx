import React from 'react'
import { Text, View } from 'react-native'
import { DiscoverScreenProps } from './props'
import { DiscoverScreenState } from './state'

export class DiscoverScreen extends React.Component<
  DiscoverScreenProps,
  DiscoverScreenState
> {
  constructor(props: DiscoverScreenProps) {
    super(props)
    this.state = {}
  }

  public render() {
    return (
      <View>
        <Text>DiscoverScreen</Text>
      </View>
    )
  }
}
