import React from 'react'
import { Text, View } from 'react-native'
import { RecomendedScreenProps } from './props'
import { RecomendedScreenState } from './state'

export class RecomendedScreen extends React.Component<
  RecomendedScreenProps,
  RecomendedScreenState
> {
  constructor(props: RecomendedScreenProps) {
    super(props)
    this.state = {}
  }

  public render() {
    return (
      <View>
        <Text>RecomendedScreen</Text>
      </View>
    )
  }
}
