import { View } from 'react-native';
import styles from './style/index';
import AppText from '@components/basic/app_text';
import { Feather, MaterialCommunityIcons } from '@expo/vector-icons';
import Colors from '@components/config/Colors';
import AppButton from '@components/basic/buttons/text_button/TextButton';

type DeliveryStatus =
  | 'delivering'
  | 'Finished'
  | 'cancelled'
  | 'pending'
  | 'deliveried';

interface ActivityItemProps {
  Status?: DeliveryStatus;
}
export default function ActivityItem({ Status }: ActivityItemProps) {
  return (
    <View style={styles.ActivityItem}>
      <View style={styles.headerContainer}>
        <AppText text={`Receipt #1235467`} style={styles.ReceiptText} />
        <View style={styles.StatusContainer}>
          <AppText text={'Status:'} style={styles.StatusTitleText} />
          <AppText text={'In the way'} style={styles.StatusText} />
          <Feather
            name="truck"
            size={23}
            color={Colors.primary}
            style={styles.truckLogo}
          />
        </View>
      </View>
      <View style={styles.footerContainer}>
        <View style={styles.priceContainer}>
          <AppText text={'900'} style={styles.price} />
          <AppText text={'Dzd'} style={styles.tag} />
        </View>
        <AppButton
          style={styles.menuButton}
          padding={0}
          icon={
            <MaterialCommunityIcons
              name="dots-horizontal"
              size={25}
              color={Colors.borders}
            />
          }
        />
      </View>
      <MaterialCommunityIcons
        name="progress-clock"
        size={20}
        color="white"
        style={styles.StatusIcon}
      />
      <View style={styles.timerContainer}>
        <AppText text={'remaining:'} style={styles.timerText} />
        <AppText text={'20:25'} style={styles.time} />
      </View>
    </View>
  );
}
