import * as React from 'react';
import {ActivityIndicator, FlatList, View, Alert, Text} from 'react-native';
import styles from './styles';
import Header from './Header';
import Footer from './Footer';
import MessageList from './MessageList';
import GeminiServiceImp from '../../domain/services/GeminiServiceImpl';
import {Message} from '../../data/remote/dto/GeminiResponseDto';
import {useNetwork} from '../../Component/NetworkContext';
const geminiService = new GeminiServiceImp();

export default React.memo(() => {
  const [messages, setMessages] = React.useState<Message[]>([]);
  const [isLoading, setIsLoading] = React.useState(false);
  const {isConnected} = useNetwork();

  // const handleSendMessage = async (message: string) => {
  //   setIsLoading(true);
  //   try {
  //     // Add user message to state first
  //     setMessages(prevMessages => [
  //       ...prevMessages,
  //       {content: message, isSentByMe: true},
  //     ]);

  //     const response = await generateContent(message);
  //     const generatedText =
  //       response.candidates?.[0].content?.parts?.[0].text ??
  //       'No response available.';

  //     // Add AI response to state after receiving it
  //     setMessages(prevMessages => [
  //       ...prevMessages,
  //       {content: generatedText, isSentByMe: false},
  //     ]);
  //   } catch (error) {
  //     console.error('Error generating content:', error);
  //     setMessages(prevMessages => [
  //       ...prevMessages,
  //       {
  //         content:
  //           'Sorry, there was an error communicating with the chatbot. Please try again later.',
  //         isSentByMe: false,
  //       },
  //     ]);
  //   } finally {
  //     setIsLoading(false);
  //   }
  // };

  const handleSendMessage = async (message: string) => {
    setIsLoading(true);

    try {
      if (isConnected) {
        setMessages(prevMessages => [
          ...prevMessages,
          {content: message, isSentByMe: true},
        ]);

        const response = await geminiService.generateContent(message);

        const generatedText =
          response.candidates?.[0].content?.parts?.[0].text ??
          'No response available.';

        setMessages(prevMessages => [
          ...prevMessages,
          {content: generatedText, isSentByMe: false},
        ]);
      } else {
        Alert.alert(
          'No Internet Connection',
          'Please check your network connection and try again later.',
          [{text: 'OK', onPress: () => console.log('OK Pressed')}],
        );
      }
    } catch (error) {
      console.error('Error generating content:', error);
    } finally {
      setIsLoading(false);
    }
  };

  const renderHeader = () => {
    if (isLoading) {
      return <ActivityIndicator size="large" color="#000000" />;
    } else {
      return null;
    }
  };

  return (
    <View style={styles.container}>
      {/* Header */}
      <Header />
      {/* {isConnected && (
        <View>
          <Text style={{color: 'black'}}>Connected</Text>
        </View>
      )} */}

      {/* Body */}
      <FlatList
        data={messages}
        renderItem={({item}) => (
          <MessageList content={item.content} isSentByMe={item.isSentByMe} />
        )}
        ListHeaderComponent={renderHeader}
        keyExtractor={item => item.content}
      />
      {/* Footer */}
      <Footer onSendMessage={handleSendMessage} />
    </View>
  );
});
