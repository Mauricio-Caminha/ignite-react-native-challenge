import React from 'react';
import { View, Image, Text, TextInput, TouchableOpacity } from 'react-native';

import { styles } from './styles';
import logo from '../../../assets/todo_logo.png';

export function Home() {
  return (
    <View style={styles.container}>
      <View style={styles.backgroundTop}>
        <Image style={styles.logo} source={logo} alt='Logo do aplicativo' />
      </View>
      <View style={styles.form}>
        <TextInput
          style={styles.input}
          placeholder='Adicione uma nova tarefa'
          placeholderTextColor={'#808080'}
        // onChangeText={setParticipantName} //(value) => setParticipantName(value)
        // value={participantName}
        />

        <TouchableOpacity style={styles.button} 
        // onPress={handleParticipantAdd}
        >
          <Text style={styles.buttonText}>+</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}