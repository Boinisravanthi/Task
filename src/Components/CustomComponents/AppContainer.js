import React, {useEffect, useRef, useState} from 'react';
import {
  KeyboardAvoidingView,
  Platform,
  SafeAreaView,
  StyleSheet,
  StatusBar,
  View,
  TouchableOpacity,
  ScrollView,
  Image,
  Text,
} from 'react-native';
import PropTypes from 'prop-types';
import {fonts} from './FontsStyle';
import LinearGradient from 'react-native-linear-gradient';
import SimpleLineIcons from 'react-native-vector-icons/SimpleLineIcons';
import Ionicons from 'react-native-vector-icons/Ionicons';

const AppContainer = props => {
  const scrollRef = useRef();

  const renderContent = () => {
    if (props.keyboardAvoidingView) {
      return (
        <KeyboardAvoidingView
          behavior={Platform.OS === 'ios' ? 'padding' : null}
          keyboardVerticalOffset={40}
          style={styles.container}>
          {props.children}
        </KeyboardAvoidingView>
      );
    } else if (props.scrollView) {
      return (
        <ScrollView
          ref={scrollRef}
          style={{marginBottom: '20%'}}
          onScrollEndDrag={() => {
            setShow(!show);
          }}>
          {props.children}
        </ScrollView>
      );
    } else {
      return props.children;
    }
  };

  return (
    <SafeAreaView >
      <StatusBar barStyle={'light-content'} backgroundColor={'black'} />
      <LinearGradient
        colors={['#e9cbff', '#734f96']}
        start={{x: 1, y: 0.2}}
        end={{x: 1, y: 0.5}}
        style={styles.linearGradient}>
          <View>
          {props.Logo && (
            <Image
              source={require('../Assets/Logo.png')}
              style={{alignSelf: 'center',marginTop:'15%',...props.imageStyle}}
            />
          )}
          {
            <View style={{bottom:'13%'}}>
              {props.title && (
                <Text style={{...styles.header, ...props.titleStyle}}>
                  {props.title}
                </Text>
              )}
             
            </View>
          }
           </View>
          

        {renderContent()}
     
      </LinearGradient>
    </SafeAreaView>
  );
};
AppContainer.defaultProps = {
  onPress: () => {},
};

AppContainer.propTypes = {
  onPress: PropTypes.func,
};

const styles = StyleSheet.create({

  linearGradient: {
    height: '100%',
    display: 'flex',
  },
  header: {
    fontSize: 35,
    fontWeight: '900',
    color: '#000080',
    textAlign: 'center',
    marginTop: '8%',
    fontFamily: 'cursive',
  },
  button: {
    width: '100%',
    alignSelf: 'center',
    zIndex: 100,
    position: 'absolute',
    bottom: '2%',
  },
});

export default AppContainer;
