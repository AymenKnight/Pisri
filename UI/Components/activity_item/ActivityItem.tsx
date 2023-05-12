import { TouchableWithoutFeedback, View } from 'react-native';
import styles from './style/index';
import AppText from '@components/basic/app_text';
import {
  AntDesign,
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
  | { name: 'delivering'; remainingTime: string }
  | 'Finished'
  | 'pending'
  | 'onDoor'
  | { name: 'notified'; numRequests: number };

interface ActivityItemProps {
  status?: DeliveryStatus;
  price: {
    amount: number;
    currency: string;
  };
  receiptId: string;
}
export default function ActivityItem({
  status,
  price,
  receiptId,
}: ActivityItemProps) {
  //TODO provide menu actions functions (props)
  //TODO refactor menuBar to single component
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
        <AppText text={`Receipt #${receiptId}`} style={styles.ReceiptText} />
        <View style={styles.StatusContainer}>
          <AppText text={'Status:'} style={styles.StatusTitleText} />
          {typeof status == 'object' ? (
            status.name == 'delivering' ? (
              <>
                <AppText text={'In the way'} style={styles.StatusText} />
                <Feather
                  name="truck"
                  size={15}
                  color={Colors.primary}
                  style={styles.truckLogo}
                />
              </>
            ) : (
              <>
                <AppText text={'You have'} style={styles.StatusText} />
                <AppText text={status.numRequests} style={styles.numReqText} />
                <AppText
                  text={`delivery ${
                    status.numRequests > 1 ? 'requests' : 'request'
                  }`}
                  style={styles.StatusText}
                />
                <AntDesign
                  name="exclamationcircleo"
                  size={15}
                  color={Colors.hot_red}
                  style={styles.truckLogo}
                />
              </>
            )
          ) : status == 'Finished' ? (
            <>
              <AppText text={'Finished'} style={styles.StatusText} />
              <SimpleLineIcons
                name="check"
                size={15}
                color={Colors.goodGreen}
                style={styles.truckLogo}
              />
            </>
          ) : status == 'pending' ? (
            <AppText
              text={'Waiting for delivery requests'}
              style={styles.StatusText}
            />
          ) : (
            <>
              <AppText
                text={'the delivery guy arrived'}
                style={styles.StatusText}
              />
              <AntDesign
                name="exclamationcircleo"
                size={15}
                color={Colors.goodGreen}
                style={styles.truckLogo}
              />
            </>
          )}
        </View>
      </View>
      <View style={styles.footerContainer}>
        <View style={styles.priceContainer}>
          <AppText text={price.amount} style={styles.price} />
          <AppText text={price.currency} style={styles.tag} />
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
              typeof status == 'object'
                ? status.name == 'delivering'
                  ? Colors.primary
                  : Colors.goodGreen
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
        {typeof status == 'object' ? (
          status.name == 'delivering' ? (
            <MaterialCommunityIcons
              name="progress-clock"
              size={18}
              color="white"
              style={styles.StatusIcon}
            />
          ) : (
            <View style={styles.notificationIconContainer}>
              <MaterialCommunityIcons
                name="account-group"
                size={18}
                color="white"
                style={styles.StatusIcon}
              />
              <View
                style={
                  status.numRequests > 0 ? styles.notificationCircle : undefined
                }
              ></View>
            </View>
          )
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
      {typeof status == 'object' && status.name == 'delivering' && (
        <View style={styles.timerContainer}>
          <AppText text={'remaining:'} style={styles.timerText} />
          <AppText text={status.remainingTime.toString()} style={styles.time} />
        </View>
      )}
      {menuIsShown && (
        <TouchableWithoutFeedback onPress={() => showMenu(false)}>
          <View style={styles.overlay} />
        </TouchableWithoutFeedback>
      )}
    </View>
  );
}
