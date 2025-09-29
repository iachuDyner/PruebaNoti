import React from 'react';
import { Button, Alert } from 'react-native';
import axios from 'axios';

const SendEmailButton = () => {
  const sendEmail = async () => {
    try {
      const response = await axios.post('http://localhost:3001/send-email', {
        to: 'iachudyner@gmail.com',
        subject: 'Notificación desde PruebaNoti',
        text: '¡Hola! Esta es una notificación automática enviada desde el repositorio iachuDyner/PruebaNoti.'
      });
      Alert.alert('Éxito', response.data.message);
    } catch (error) {
      Alert.alert('Error', error.response?.data?.error || error.message);
    }
  };

  return (
    <Button title="Enviar notificación" onPress={sendEmail} />
  );
};

export default SendEmailButton;