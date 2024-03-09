import React from 'react';
import styles from './styles';
import {TextInput, TouchableOpacity, View} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

interface MessageInputProps {
  onSendMessage: (message: string) => void;
}

export default React.memo((props: MessageInputProps) => {
  const [message, setMessage] = React.useState('');

  const handleSendMessage = () => {
    if (message.trim()) {
      props.onSendMessage(message);
      setMessage('');
    }
  };

  return (
    <View style={styles.footer}>
      <TextInput
        style={styles.input}
        placeholder="Type your message..."
        value={message}
        onChangeText={setMessage}
      />
      <TouchableOpacity onPress={handleSendMessage} style={styles.sendButton}>
        <Icon name="send" size={24} color="#3498DB" />
      </TouchableOpacity>
    </View>
  );
});
