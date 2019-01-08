import React from 'react'
import { Text, View } from 'react-native'
import { NewReleasesScreenProps } from './props'
import { NewReleasesScreenState } from './state'

export class NewReleasesScreen extends React.Component<
  NewReleasesScreenProps,
  NewReleasesScreenState
> {
  constructor(props: NewReleasesScreenProps) {
    super(props)
    this.state = {}
  }

  public render() {
    return (
      <View>
        <Text>NewReleasesScreen</Text>
      </View>
    )
  }
}
