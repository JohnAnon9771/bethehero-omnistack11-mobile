import React, { useEffect, useState } from 'react';
import { useNavigation } from '@react-navigation/native';
import { Feather } from '@expo/vector-icons';
import { Image } from 'react-native';

import api from '../../services/api';

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
  const [incidents, setIncidents] = useState([]);
  const navigation = useNavigation();
  function navigateToDetails() {
    navigation.navigate('details');
  }

  useEffect(() => {
    async function loadData() {
      const response = await api.get('incidents');
      setIncidents(response.data);
    }
    loadData();
  }, []);

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
        data={incidents}
        keyExtractor={(item, index) => `list-item${index}`}
        showsVerticalScrollIndicator={false}
        renderItem={({ incident }) => (
          <Incident>
            <IncidentProperty>ONG:</IncidentProperty>
            <IncidentValue>{incident.name}</IncidentValue>
            <IncidentProperty>CASO:</IncidentProperty>
            <IncidentValue>{incident.title}</IncidentValue>
            <IncidentProperty>VALOR:</IncidentProperty>
            <IncidentValue>
              {Intl.NumberFormat('pt-BR', {
                style: 'currency',
                currency: 'BRL',
              }).format(incident.value)}
            </IncidentValue>

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
