import { View } from 'react-native';
import styles from './style/index';
import AppText from '@components/basic/app_text';
import {
  Entypo,
  Feather,
  FontAwesome,
  MaterialCommunityIcons,
  SimpleLineIcons,
} from '@expo/vector-icons';
import Colors from '@components/config/Colors';
import AppButton from '@components/basic/buttons/text_button/TextButton';
import * as Animatable from 'react-native-animatable';
import { useState } from 'react';

type DeliveryStatus =
  | 'delivering'
  | 'Finished'
  | 'pending'
  | 'onDoor'
  | 'notified';

interface ActivityItemProps {
  status?: DeliveryStatus;
}
export default function ActivityItem({ status }: ActivityItemProps) {
  //TODO provide real data (props)
  //TODO close menuBar when clicked outside or by time
  //TODO show remaining time in some status
  //TODO refactor menuBar to single comp
  //TODO handle the logic (onPress and state)
  //TODO handle time format
  const [menuIsShown, showMenu] = useState(false);
  return (
    <View
      style={[
        styles.ActivityItem,
        { borderBottomRightRadius: menuIsShown ? 0 : 20 },
      ]}
    >
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
        {status == 'onDoor' ? (
          <Animatable.View
            style={styles.hereButtonContainer}
            animation="swing"
            duration={1200}
            useNativeDriver={true}
            iterationDelay={5000}
            iterationCount="infinite"
          >
            <AppButton
              style={styles.hereButton}
              textStyle={styles.hereButtonText}
              padding={8}
              text="It's here!"
            />
          </Animatable.View>
        ) : menuIsShown ? (
          <Animatable.View
            animation="jello"
            duration={1000}
            style={styles.popMenu}
            // onPress={hundleMenuPress}
          >
            <AppButton
              style={{
                backgroundColor: Colors.goodGreen,
                borderRadius: 100,
                width: 30,
                height: 30,
              }}
              padding={0}
              icon={
                <MaterialCommunityIcons
                  name="account-group"
                  size={15}
                  color="white"
                />
              }
            />
            <AppButton
              style={{
                backgroundColor: Colors.coldBlue,
                borderRadius: 100,
                width: 30,
                height: 30,
              }}
              padding={0}
              icon={<FontAwesome name="pause" size={12} color="white" />}
            />
            <AppButton
              style={{
                backgroundColor: Colors.Unfocused_Blue,
                borderRadius: 100,
                width: 30,
                height: 30,
              }}
              padding={0}
              icon={
                <FontAwesome
                  name="pencil-square-o"
                  size={15}
                  color={Colors.white}
                />
              }
            />
            <AppButton
              style={{
                backgroundColor: Colors.hot_red,
                borderRadius: 100,
                width: 30,
                height: 30,
              }}
              padding={0}
              icon={<Feather name="x" size={18} color="white" />}
            />
          </Animatable.View>
        ) : (
          <AppButton
            style={styles.menuButton}
            padding={0}
            onPress={() => showMenu(true)}
            icon={
              <MaterialCommunityIcons
                name="dots-horizontal"
                size={25}
                color={Colors.borders}
              />
            }
          />
        )}
      </View>
      <View
        style={[
          styles.StatusIconContainer,
          {
            backgroundColor:
              status == 'delivering'
                ? Colors.primary
                : status == 'notified'
                ? Colors.goodGreen
                : status == 'pending'
                ? Colors.coldBlue
                : status == 'Finished'
                ? Colors.goodGreen
                : status == 'onDoor'
                ? Colors.coldBlue
                : Colors.primary,
          },
        ]}
      >
        {status == 'delivering' ? (
          <MaterialCommunityIcons
            name="progress-clock"
            size={18}
            color="white"
            style={styles.StatusIcon}
          />
        ) : status == 'notified' ? (
          <MaterialCommunityIcons
            name="account-group"
            size={15}
            color="white"
            style={styles.StatusIcon}
          />
        ) : status == 'pending' ? (
          <MaterialCommunityIcons
            name="walk"
            size={18}
            color="white"
            style={styles.StatusIcon}
          />
        ) : status == 'Finished' ? (
          <Entypo
            name="check"
            size={18}
            color={Colors.white}
            style={styles.StatusIcon}
          />
        ) : status == 'onDoor' ? (
          <MaterialCommunityIcons
            name="bell-alert"
            size={15}
            color={Colors.white}
          />
        ) : (
          <MaterialCommunityIcons name="door" size={18} color={Colors.white} />
        )}
      </View>
      <View style={styles.timerContainer}>
        <AppText text={'remaining:'} style={styles.timerText} />
        <AppText text={'20:25'} style={styles.time} />
      </View>
    </View>
  );
}
