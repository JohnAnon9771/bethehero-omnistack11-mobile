import React from 'react';
import { useNavigation } from '@react-navigation/native';
import { Feather } from '@expo/vector-icons';
import { Image } from 'react-native';

import {
  Container,
  Header,
  HeaderText,
  HeaderTextBold,
  Title,
  Description,
  IncidentList,
  Incident,
  IncidentProperty,
  IncidentValue,
  DetailsButton,
  DetailsButtonText,
} from './styles';

import logo from '../../assets/logo.png';

export default function Incidents() {
  const navigation = useNavigation();
  function navigateToDetails() {
    navigation.navigate('details');
  }
  return (
    <Container>
      <Header>
        <Image source={logo} />
        <HeaderText>
          Total de <HeaderTextBold>0 casos</HeaderTextBold>.
        </HeaderText>
      </Header>
      <Title>Bem-vindo!</Title>
      <Description>Escolha um dos casos abaixos e salve o dia.</Description>
      <IncidentList
        data={[1, 2, 3]}
        keyExtractor={(item, index) => `list-item${index}`}
        showsVerticalScrollIndicator={false}
        renderItem={() => (
          <Incident>
            <IncidentProperty>ONG:</IncidentProperty>
            <IncidentValue>APAD</IncidentValue>
            <IncidentProperty>CASO:</IncidentProperty>
            <IncidentValue>teste</IncidentValue>
            <IncidentProperty>VALOR:</IncidentProperty>
            <IncidentValue>R$120,00</IncidentValue>

            <DetailsButton onPress={navigateToDetails}>
              <DetailsButtonText>Ver mais detalhes</DetailsButtonText>
              <Feather name="arrow-right" size={16} color="#e02041" />
            </DetailsButton>
          </Incident>
        )}
      />
    </Container>
  );
}
