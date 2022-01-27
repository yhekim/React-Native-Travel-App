/*eslint-disable */
import React from 'react';
import {
  ImageBackground,
  SafeAreaView,
  StatusBar,
  StyleSheet,
  View,
  Text,
} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import COLORS from '../../consts/colors';

const DetailsScreen = ({navigation, route}) => {
  const place = route.params;
  //console.log(place);
  return (
    <SafeAreaView style={{flex: 1, backgroundColor: COLORS.white}}>
      <StatusBar translucent backgroundColor="rgba(0,0,0,0)" />
      <ImageBackground style={{flex: 0.7}} source={place.image}>
        <View style={style.header}>
          <Icon
            name="arrow-back-ios"
            size={25}
            color={COLORS.white}
            onPress={navigation.goBack}
          />
          <Icon name="more-vert" size={25} color={COLORS.white} />
        </View>
        <View style={style.imageDetails}>
          <Text
            style={{
              width: '70%',
              fontSize: 30,
              fontWeight: 'bold',
              color: COLORS.white,
              marginBottom: 20,
            }}>
            {place.name}
          </Text>
          <View tyle={{flexDirection: 'row'}}>
            <Icon name="star" color={COLORS.orange} size={30} />
            <Text
              style={{color: COLORS.white, fontSize: 20, fontWeight: 'bold'}}>
              5.0
            </Text>
          </View>
        </View>
      </ImageBackground>
      <View style={style.detailsContainer}>
        <View style={style.iconContainer}>
          <Icon name="favorite" size={30} color={COLORS.red} />
        </View>
        <View style={{flexDirection: 'row', marginTop: 10}}>
          <Icon name="place" size={28} color={COLORS.primary} />
          <Text
            style={{
              color: COLORS.primary,
              marginLeft: 8,
              fontSize: 20,
              fontWeight: 'bold',
            }}>
            {place.location}
          </Text>
        </View>
        <Text style={{marginTop: 20, fontSize: 20, fontWeight: 'bold'}}>
          About the Trip
        </Text>
        <Text style={{marginTop: 10, lineHeight: 22}}>{place.details}</Text>
      </View>
      <View style={style.footer}>
        <View style={{flex: 1, flexDirection: 'row', alignContent: 'center'}}>
          <Text style={{fontSize: 18, fontWeight: 'bold', color: COLORS.white}}>
            $100
          </Text>
          <Text
            style={{
              fontSize: 14,
              fontWeight: 'bold',
              marginLeft: 4,
              color: COLORS.grey,
            }}>
            /PER DAY
          </Text>
        </View>
        <View style={style.bookNowBtn}>
          <Text
            style={{color: COLORS.primary, fontSize: 16, fontWeight: 'bold'}}>
            Book Now
          </Text>
        </View>
      </View>
    </SafeAreaView>
  );
};
const style = StyleSheet.create({
  bookNowBtn: {
    height: 50,
    width: 150,
    backgroundColor: COLORS.white,
    borderRadius: 10,
    justifyContent: 'center',
    alignItems: 'center',
  },

  iconContainer: {
    height: 60,
    width: 60,
    position: 'absolute',
    top: -30,
    borderRadius: 30,
    backgroundColor: COLORS.white,
    elevation: 10,
    right: 20,
    justifyContent: 'center',
    alignItems: 'center',
  },
  detailsContainer: {
    top: -30,
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
    paddingVertical: 40,
    paddingHorizontal: 20,
    backgroundColor: COLORS.white,
    flex: 0.3,
  },
  header: {
    marginTop: 60,
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: 20,
  },
  imageDetails: {
    padding: 20,
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '100%',
    position: 'absolute',
    bottom: 30,
  },
  footer: {
    backgroundColor: COLORS.primary,
    height: 70,
    flexDirection: 'row',
    borderTopLeftRadius: 15,
    borderTopRightRadius: 15,
    paddingHorizontal: 20,
    justifyContent: 'space-between',
    alignItems: 'center',
  },
});

export default DetailsScreen;
