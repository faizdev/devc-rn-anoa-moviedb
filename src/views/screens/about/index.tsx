import React from 'react'
import { Text, View } from 'react-native'
import { AboutScreenProps } from './props'
import { AboutScreenState } from './state'

export class AboutScreen extends React.Component<
  AboutScreenProps,
  AboutScreenState
> {
  constructor(props: AboutScreenProps) {
    super(props)
    this.state = {}
  }

  public render() {
    return (
      <View>
        <Text>AboutScreen</Text>
      </View>
    )
  }
}
