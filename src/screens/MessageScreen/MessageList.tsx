import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import styles from './styles';
import {Message} from '../../data/remote/dto/GeminiResponseDto';

export default React.memo((message: Message) => {
  const backgroundColor = message.isSentByMe ? '#3498DB' : '#E5E4E2';
  const textColor = message.isSentByMe ? '#fff' : '#3498DB';
  const alignSelf = message.isSentByMe ? 'flex-end' : 'flex-start';
  const borderBottomEndRadius = message.isSentByMe ? 0 : 4;
  const borderBottomStartRadius = message.isSentByMe ? 4 : 0;
  return (
    <View
      style={StyleSheet.compose(styles.messageStyle, {
        backgroundColor: backgroundColor,
        alignSelf: alignSelf,
        borderBottomEndRadius,
        borderBottomStartRadius,
      })}>
      <Text style={StyleSheet.compose(styles.messageItem, {color: textColor})}>
        {message.content}
      </Text>
    </View>
  );
});
