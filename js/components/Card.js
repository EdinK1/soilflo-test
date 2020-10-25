import React from 'react'
import { StyleSheet } from 'react-native'
import {
  Card as NativeCard,
  CardItem,
  Text,
  Icon,
  Button,
  Body,
} from 'native-base'
import globalStyles from './styles'

const Card = ({ statusCode, company, time }) => {
  const checkStatus = () => {
    return statusCode == 'pending'
      ? styles.pending
      : statusCode == 'accepted'
      ? styles.accepted
      : statusCode == 'rejected'
      ? styles.rejected
      : ''
  }

  return (
    <NativeCard style={styles.card}>
      <CardItem>
        <Body style={styles.cardHeader}>
          <Text style={styles.title}>Truck #123</Text>
          <Text style={styles.status}>
            Status:{' '}
            <Text style={checkStatus()}>
              {statusCode == 'pending'
                ? 'Waiting'
                : statusCode == 'accepted'
                ? 'Accepted'
                : statusCode == 'rejected'
                ? 'Rejected'
                : ''}
            </Text>
            {statusCode == 'pending' ? '' : ' by '}
            <Text style={styles.company}>{company}</Text>{' '}
            {statusCode == 'pending' ? '' : 'at'} {time}
          </Text>
        </Body>
      </CardItem>
      <CardItem style={styles.cardFooter} footer>
        <Button iconLeft style={globalStyles.primaryButton} bordered light>
          <Icon type='AntDesign' name='infocirlce' style={styles.icon} />
          <Text style={globalStyles.primaryButtonText}>More Info</Text>
        </Button>
        <Button iconLeft>
          <Icon
            type='MaterialCommunityIcons'
            name='dump-truck'
            style={{ transform: [{ rotateY: '180deg' }] }}
          />
          <Text style={globalStyles.secondaryButtonText}>Dispatch</Text>
        </Button>
      </CardItem>
    </NativeCard>
  )
}

const styles = StyleSheet.create({
  card: {
    borderRadius: 4,
  },
  icon: {
    color: '#74777b',
  },
  status: {
    lineHeight: 21,
  },
  title: {
    fontWeight: 'bold',
    paddingBottom: 10,
  },
  cardHeader: {
    paddingTop: 10,
    paddingBottom: 30,
  },
  cardFooter: {
    backgroundColor: '#f5f6f7',
    borderTopColor: '#e1e1e2',
    borderTopWidth: 1,
    borderRadius: 4,
    justifyContent: 'space-around',
    alignItems: 'center',
  },
  company: {
    fontWeight: 'bold',
  },
  pending: {
    color: '#e3b724',
  },
  accepted: {
    color: '#3bb927',
  },
  rejected: {
    color: '#e00720',
  },
})

export default Card
