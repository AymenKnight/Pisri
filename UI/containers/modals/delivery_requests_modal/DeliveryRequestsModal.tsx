import { View } from 'react-native';
import styles from './style/index';
import AppText from '@components/basic/app_text';
import MemberItem from '@components/member_item';
import member from '@toPng/member.png';
import { MemberItemProps } from '@components/member_item/MemberItem';

const data: MemberItemProps[] = [
  {
    image: member,
    id: 1,
    name: 'John Doe',
    age: 30,
    timer: '12:00',
  },
  {
    image: member,
    id: 2,
    name: 'John Doe',
    age: 30,
    timer: '12:00',
  },
];

interface DeliveryRequestsModalProps {
  receiptId: string;
}
export default function DeliveryRequestsModal({
  receiptId,
}: DeliveryRequestsModalProps) {
  return (
    <View style={styles.DeliveryRequestsModal}>
      <View style={styles.headerContainer}>
        <AppText text="Delivery requests" style={styles.HeaderTextStyle} />
        <AppText
          text={`Receipt #${receiptId}`}
          style={styles.ReceiptTextStyle}
        />
      </View>
      <View style={styles.requestsContainer}>
        <AppText
          text="You have to accept the request before the time’s up"
          style={styles.description}
        />
        <View style={styles.membersContainer}>
          {data.map((item) => (
            <MemberItem
              key={item.id}
              image={item.image}
              id={item.id}
              name={item.name}
              age={item.age}
              timer={item.timer}
            />
          ))}
        </View>
      </View>
    </View>
  );
}
