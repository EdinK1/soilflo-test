import React from 'react'
import { View, StyleSheet } from 'react-native'
import { Button, Text, Icon } from 'native-base'
import globalStyles from './styles'

const Header = () => {
  return (
    <View style={styles.header}>
      <View style={styles.full}>
        <Button style={globalStyles.primaryButton} bordered light>
          <Text style={globalStyles.primaryButtonText}>
            12 trucks | 37 loads
          </Text>
        </Button>
      </View>
      <Button style={globalStyles.secondaryButton} iconLeft bordered light>
        <Icon type='AntDesign' name='table' />
        <Text style={globalStyles.primaryButtonText}>Sprint Sheet</Text>
      </Button>
      <Button iconLeft>
        <Icon type='AntDesign' name='plus' />
        <Text style={globalStyles.secondaryButtonText}>Add Truck</Text>
      </Button>
    </View>
  )
}

const styles = StyleSheet.create({
  header: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-evenly',
    alignItems: 'center',
    paddingVertical: 25,
    width: '100%',
  },
  primaryButton: {
    backgroundColor: '#fff',
  },
  full: {
    flexBasis: '100%',
    flexDirection: 'row',
    justifyContent: 'center',
    marginBottom: 20,
  },
  primaryButtonText: {
    color: '#666666',
    fontWeight: 'bold',
    fontSize: 14,
  },
  secondaryButtonText: {
    color: '#fff',
    fontWeight: 'bold',
  },
})

export default Header
