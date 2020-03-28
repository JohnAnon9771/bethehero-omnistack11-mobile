import React from 'react';
import { useNavigation } from '@react-navigation/native';
import { Feather } from '@expo/vector-icons';
import { Image, TouchableOpacity, Linking } from 'react-native';

import * as MailComposer from 'expo-mail-composer';

import {
  Container,
  Header,
  Incident,
  IncidentProperty,
  IncidentValue,
  Action,
  Actions,
  ActionText,
  ContactBox,
  HeroDescription,
  HeroTitle,
} from './styles';

import logo from '../../assets/logo.png';

export default function Details() {
  const navigation = useNavigation();
  const message =
    'Olá APAD, estou entrando em contado pois gostaria de ajudar no caso "Caso1" com o valor de R$120,00';
  function navigateToIncidents() {
    navigation.goBack();
  }

  function sendMail() {
    MailComposer.composeAsync({
      subject: 'Herói do caso: caso1',
      recipients: ['nicolesousa1306@gmail.com'],
      body: message,
    });
  }

  function sendWhatsapp() {
    Linking.openURL(`whatsapp://send?phone=558881687878&text=${message}`);
  }
  return (
    <Container>
      <Header>
        <Image source={logo} />
        <TouchableOpacity onPress={navigateToIncidents}>
          <Feather name="arrow-left" size={28} color="#e02041" />
        </TouchableOpacity>
      </Header>
      <Incident>
        <IncidentProperty style={{ marginTop: 0 }}>ONG:</IncidentProperty>
        <IncidentValue>APAD</IncidentValue>
        <IncidentProperty>CASO:</IncidentProperty>
        <IncidentValue>teste</IncidentValue>
        <IncidentProperty>VALOR:</IncidentProperty>
        <IncidentValue>R$120,00</IncidentValue>
      </Incident>
      <ContactBox>
        <HeroTitle>Salve o dia!</HeroTitle>
        <HeroTitle>Seja o herói desse caso.</HeroTitle>
        <HeroDescription>Entre em contato:</HeroDescription>
        <Actions>
          <Action onPress={sendWhatsapp}>
            <ActionText>WhatsApp</ActionText>
          </Action>
          <Action onPress={sendMail}>
            <ActionText>E-mail</ActionText>
          </Action>
        </Actions>
      </ContactBox>
    </Container>
  );
}
