import React, {useState, useEffect} from 'react';
import {
  Text,
  View,
  StyleSheet,
  Dimensions,
  TouchableHighlight,
  SafeAreaView,
  StatusBar,
  Image,
  TouchableOpacity,
  Animated,
} from 'react-native';
import Video from 'react-native-video';
import auth from '@react-native-firebase/auth';

import styles from './styles';

import {images} from '@assets';
import {TextDirectory} from 'helper/TextDirectory';
import {useNavigation} from '@react-navigation/native';

function Onboarding() {
  const navigation = useNavigation();

  const [initializing, setInitializing] = useState(true);
  const [user, setUser] = useState();

  // Handle user state changes
  function onAuthStateChanged(user) {
    setUser(user);
    if (initializing) setInitializing(false);
  }

  useEffect(() => {
    const subscriber = auth().onAuthStateChanged(onAuthStateChanged);
    return subscriber; // unsubscribe on unmount
  },[]);

  if (initializing) return null;

  if (user) {
    console.log(user.email);
    navigation.navigate(TextDirectory.mainScreen);
  }
  return (
    <Animated.View style={styles.container}>
      <StatusBar hidden={false} translucent backgroundColor="transparent" />
      <Video
        source={images.video_nike}
        style={styles.backgroundVideo}
        muted={true}
        repeat={true}
        resizeMode={'cover'}
        rate={1.0}
        ignoreSilentSwitch={'obey'}
      />

      <View style={styles.Wrapper}>
        <Image
          style={{width: 150, height: 150}}
          source={images.logo.logo_notText}
          width={80}
          height={80}
          resizeMode="contain"
        />
        <View style={styles.SloganContainer}>
          <View style={styles.slogan}>
            <Text style={styles.title}>NEW STYLES ON SALE</Text>
            <Text style={styles.TextDescription}>
              Shop new sale markdowns and save up to 40%. Quantities are
              limited. Shop Now
            </Text>
          </View>

          <View style={styles.styleButton}>
            <TouchableOpacity
              style={styles.styleCreate}
              onPress={() => navigation.navigate(TextDirectory.register)}>
              <Text style={styles.titleCreate}>Create account</Text>
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() => navigation.navigate(TextDirectory.login)}
              style={styles.styleLogin}>
              <Text style={styles.titleLogin}>Login</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </Animated.View>
  );
}

export default Onboarding;