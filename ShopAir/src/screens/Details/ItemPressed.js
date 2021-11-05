/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {Image, StyleSheet, Text, TouchableOpacity, View} from 'react-native';

// import Colors
import {Colors, Sizes} from '@assets';

import Icon from 'react-native-vector-icons/MaterialIcons';

const ItemPressed = ({navigation, route}) => {
  const {
    itemProductName,
    itemPrice,
    itemImage,
    itemColor,
    itemSaleUp,
  } = route.params;
  return (
    <View style={[styles.container, {backgroundColor: '#fff'}]}>
      {/* Header */}
      <View style={styles.header}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <Icon
            name="arrow-back"
            size={32}
            color={Colors.colors.light.foreground}
          />
        </TouchableOpacity>
        <TouchableOpacity>
          <Icon
            name="shopping-cart"
            size={30}
            color={Colors.colors.light.foreground}
          />
          <View style={styles.badgeContainer}>
            <Text style={styles.badgeText}>6</Text>
          </View>
        </TouchableOpacity>
      </View>

      {/* Body */}
      <View style={styles.imgContainer}>
        <Image
          source={{uri: 'http://10.0.2.2:3003/images/' + itemImage}}
          style={{width: '100%', height: '100%'}}
          resizeMode="cover"
        />
      </View>
      <View style={styles.detailsContainer}>
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-between',
            alignItems: 'center',
          }}>
          <View style={styles.sizesContainer}>
            <View
              style={[
                styles.sizeCircleContainer,
                {backgroundColor: itemColor},
              ]}>
              <Text>S</Text>
            </View>
            <View style={styles.sizeCircleContainer}>
              <Text>M</Text>
            </View>
            <View style={styles.sizeCircleContainer}>
              <Text>L</Text>
            </View>
          </View>
          <Text style={styles.priceText}>{itemPrice}$</Text>
        </View>
        <Text style={styles.descriptionText}>{itemProductName}</Text>
      </View>

      {/* Footer */}
      <View style={styles.footerContainer}>
        <TouchableOpacity style={[styles.btnContainer, {marginRight: 10}]}>
          <Icon name="bookmark" size={30} color={itemColor} />
        </TouchableOpacity>
        <TouchableOpacity
          style={[styles.btnContainer, {flex: 1, backgroundColor: itemColor}]}>
          <Text style={styles.btnText}>ADD TO CARD</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default ItemPressed;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  header: {
    height: 70,
    padding: 20,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    position: 'absolute',
    zIndex: 1,
    width: '100%',
  },
  headerTitle: {
    fontWeight: 'bold',
    fontSize: Sizes.h4,
  },
  badgeContainer: {
    top: -4,
    right: -4,
    width: 18,
    height: 18,
    borderRadius: 10,
    alignItems: 'center',
    justifyContent: 'center',
    position: 'absolute',
    backgroundColor: Colors.red,
  },
  badgeText: {
    color: Colors.lightGray,
  },
  imgContainer: {
    flex: 2,
    alignItems: 'center',
    justifyContent: 'center',
  },
  detailsContainer: {
    flex: 1,
    padding: 20,
    paddingTop: 30,
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
    backgroundColor: Colors.lightGray,
  },
  sizesContainer: {
    flexDirection: 'row',
  },
  sizeCircleContainer: {
    width: 30,
    height: 30,
    marginRight: 10,
    borderRadius: 30,
    borderWidth: 1,
    alignItems: 'center',
    justifyContent: 'center',
    borderColor: Colors.lightGray,
    backgroundColor: Colors.lightGray,
  },
  priceText: {
    fontWeight: 'bold',
    fontSize: Sizes.h5,
  },
  descriptionText: {
    marginTop: 20,
    fontWeight: '900',
    fontSize: Sizes.h4,
    color: Colors.gray,
  },
  footerContainer: {
    padding: 20,
    flexDirection: 'row',
    backgroundColor: Colors.lightGray2,
  },
  btnContainer: {
    padding: 15,
    borderRadius: 15,
    alignItems: 'center',
    justifyContent: 'center',
    borderWidth: 1,
  },
  btnText: {
    fontWeight: 'bold',
    fontSize: Sizes.h3,
  },
});
