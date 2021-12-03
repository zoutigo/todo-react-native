import React from "react"
import Navigation from "@navigation/Navigation"
import { AppStateProvider } from "./app/state/AppContext"
import { View, Text } from "react-native"

export default function App() {
  return (
    <AppStateProvider>
      <View>
        <Text>Hello</Text>
      </View>
    </AppStateProvider>
  )

  // return <Navigation />;

  // return (
  //   <View>
  //     <Text>Hello</Text>
  //   </View>
  // );
}
