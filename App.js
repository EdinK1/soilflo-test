import React from 'react'
import { StyleSheet } from 'react-native'
import { Container, Content, Text } from 'native-base'
import { Header, Card } from './js/components'

const App = () => {
  return (
    <Container style={styles.container}>
      <Content>
        <Header />
        <Card statusCode='pending' />
        <Card
          statusCode='accepted'
          company='Lafarge Transfer Facility'
          time='2:12pm'
        />
        <Card
          statusCode='rejected'
          company='Lafarge Transfer Facility'
          time='2:12pm'
        />
        <Text style={styles.sentHome}>Trucks Sent Home</Text>
        <Card
          statusCode='accepted'
          company='Lafarge Transfer Facility'
          time='2:12pm'
        />
      </Content>
    </Container>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f5f6f7',
    paddingHorizontal: 20,
  },
  sentHome: {
    paddingTop: 25,
    paddingBottom: 10,
    fontWeight: 'bold',
  },
})

export default App
