import { FlatList, View } from 'react-native';
import styles from './style/index';

import ActivityItem from '@components/activity_item';
import { ActivityItemProps } from '@components/activity_item/ActivityItem';

const data: ActivityItemProps[] = [
  {
    status: {
      name: 'delivering',
      remainingTime: '2 min',
    },
    price: {
      amount: 1200,
      currency: 'Dzd',
    },
    receiptId: '1234567891',
  },
  {
    status: 'pending',
    price: {
      amount: 1200,
      currency: 'Dzd',
    },
    receiptId: '1234567892',
  },
  {
    status: 'onDoor',
    price: {
      amount: 1200,
      currency: 'Dzd',
    },
    receiptId: '1234567893',
  },
  {
    status: {
      name: 'notified',
      numRequests: 10,
    },
    price: {
      amount: 1200,
      currency: 'Dzd',
    },
    receiptId: '1234567894',
  },
  {
    status: 'Finished',
    price: {
      amount: 1200,
      currency: 'Dzd',
    },
    receiptId: '1234567895',
  },
  {
    status: 'pending',
    price: {
      amount: 1200,
      currency: 'Dzd',
    },
    receiptId: '1234567896',
  },
];
interface FinishedTabProps {}
export default function FinishedTab({}: FinishedTabProps) {
  return (
    <View style={styles.FinishedTab}>
      <FlatList
        data={data}
        keyExtractor={(item) => item.receiptId.toString()}
        style={styles.FlatListStyle}
        contentContainerStyle={styles.content}
        contentInsetAdjustmentBehavior="never"
        renderItem={({ item }) => (
          <ActivityItem
            status={item.status}
            price={item.price}
            receiptId={item.receiptId}
          />
        )}
      />
    </View>
  );
}
