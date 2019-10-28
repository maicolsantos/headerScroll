import React from 'react';
import {Text, View, StyleSheet, Animated, ScrollView} from 'react-native';
import {HeaderBackButton} from 'react-navigation-stack';

const HEADER_MIN_HEIGHT = 84;
const HEADER_MAX_HEIGHT = 200;

const HeaderScroll = ({navigation}) => {
  const scrollYAnimatedValue = new Animated.Value(0);
  const arr = [];

  for (var i = 1; i <= 75; i++) {
    arr.push(i);
  }

  const headerHeight = scrollYAnimatedValue.interpolate({
    inputRange: [0, HEADER_MAX_HEIGHT - HEADER_MIN_HEIGHT],
    outputRange: [HEADER_MAX_HEIGHT, HEADER_MIN_HEIGHT],
    extrapolate: 'clamp',
  });

  const headerBackgroundColor = scrollYAnimatedValue.interpolate({
    inputRange: [0, HEADER_MAX_HEIGHT - HEADER_MIN_HEIGHT],
    outputRange: ['#e91e63', '#1DA1F2'],
    extrapolate: 'clamp',
  });

  return (
    <View style={styles.container}>
      <ScrollView
        contentContainerStyle={{paddingTop: HEADER_MAX_HEIGHT}}
        scrollEventThrottle={16}
        onScroll={Animated.event([
          {nativeEvent: {contentOffset: {y: scrollYAnimatedValue}}},
        ])}>
        {arr.map((item, key) => (
          <View key={key} style={styles.item}>
            <Text style={styles.itemText}>Row No : {item}</Text>
          </View>
        ))}
      </ScrollView>

      <Animated.View
        style={[
          styles.animatedHeaderContainer,
          {height: headerHeight, backgroundColor: headerBackgroundColor},
        ]}>
        <View style={styles.backButton}>
          <HeaderBackButton
            title="Voltar"
            backTitleVisible={true}
            tintColor={'white'}
            onPress={() => navigation.goBack(null)}
          />
        </View>
        <Text style={styles.headerText}>Animated Header</Text>
      </Animated.View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
  },
  backButton: {
    position: 'absolute',
    top: 38,
    left: 0,
  },
  animatedHeaderContainer: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    justifyContent: 'center',
    alignItems: 'center',
  },
  headerText: {
    color: 'white',
    fontSize: 22,
    paddingTop: 36,
  },
  item: {
    backgroundColor: '#ff9e80',
    margin: 8,
    height: 45,
    justifyContent: 'center',
    alignItems: 'center',
  },
  itemText: {
    color: 'black',
    fontSize: 16,
  },
});

HeaderScroll.navigationOptions = ({navigation}) => ({
  header: null,
  headerTintColor: 'white',
  // headerLeft: <HeaderBackButton style={styles.backButton} title="Voltar" backTitleVisible={true} onPress={() => navigation.goBack(null)} />
});

export default HeaderScroll;
