import React from 'react'
import { Text, View } from 'react-native'
import { AppStyle } from '../../styles'
import { MainHeaderProps } from './props'
import { MainHeaderState } from './state'

@AppStyle.withThemeClass()
export class MainHeader extends React.Component<
  MainHeaderProps,
  MainHeaderState
> {
  constructor(props: MainHeaderProps) {
    super(props)
    this.state = {}
  }

  public render() {
    return (
      <View>
        <Text>MainHeader</Text>
      </View>
    )
  }
}
