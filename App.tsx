import { NavigationContainer } from '@react-navigation/native';
import AuthNavigator from '@navigation/auth_navigator';

// const styles = StyleSheet.create({
//   container: {
//     display: 'flex',
//     flexDirection: 'column',
//     gap: 10,
//     flex: 1,
//     backgroundColor: '#fff',
//     alignItems: 'center',
//     justifyContent: 'center',
//     padding: 20,
//   },
// });

export default function App() {
  return (
    <NavigationContainer
    // theme={{
    //   dark: false,
    //   colors: {
    //     background: Colors.white,
    //     border: Colors.borders,
    //     text: Colors.black,
    //     primary: Colors.primary,
    //     notification: Colors.coldBlue,
    //     card: Colors.white,
    //   },
    // }}
    >
      <AuthNavigator />
    </NavigationContainer>

    // <View style={styles.container}>
    //   <AppTextInput
    //     label="Name"
    //     itemsDirection="row"
    //     expoIcon={{
    //       expoIconLibrary: 'MaterialCommunityIcons',
    //       expoIconName: 'magnify',
    //       size: 25,
    //     }}
    //   />
    //   <PasswordInput />
    //   <NumberInputReducer />
    //   <UnitValueReducer value={`x${2}`} />

    //   <StatusBar style="auto" />
    // </View>
  );
}
// export { default } from './storybook';
