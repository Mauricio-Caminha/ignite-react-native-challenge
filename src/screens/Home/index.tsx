import React, { useState } from 'react';
import { View, Image, Text, TextInput, TouchableOpacity, Alert, FlatList } from 'react-native';
import uuid from 'react-native-uuid';

import { styles } from './styles';
import { Task } from '../../components/Task';

import logo from '../../../assets/todo_logo.png';
import plus from '../../../assets/plus.png';
import clipboard from '../../../assets/Clipboard.png';
import { ITask } from '../../@types/ITask';

export function Home() {
  const [tasks, setTasks] = useState<ITask[]>([]);
  const [taskDescription, setTaskDescription] = useState<string>('');
  const completedTasks = tasks.filter((task) => task.isCompleted).length;

  function handleAddTask() {

    const newTask: ITask = {
      id: uuid.v4() as string,
      description: taskDescription,
      isCompleted: false,
    };

    if (newTask.description.length <= 0) {
      return Alert.alert('Campo vazio', 'Por favor, digite sua tarefa.');
    }

    tasks.map(({ description }) => {
      if (description === newTask.description) {
        return Alert.alert('Tarefa duplicada', 'Esta tarefa já existe na lista.');
      }
    })

    setTasks((prevState) => [...prevState, newTask]);
    setTaskDescription('');
  }

  function handleRemoveTask(taskDescription: string, taskId: string) {
    Alert.alert('Remover', `Deseja remover a tarefa ${taskDescription}?`, [
      {
        text: 'Sim',
        onPress: () => {
          setTasks((prevState) => prevState.filter((task) => task.id !== taskId));
          Alert.alert(`Tarefa Removida!`)
        }
      },
      {
        text: 'Não',
        style: 'cancel'
      },
    ])
  }

  function handleCountCompletedTasks(taskId: string) {
    const completedTasks = tasks.map((task) => {
      if (task.id === taskId) {
        return {
          ...task,
          isCompleted: !task.isCompleted,
        };
      }
      return task;
    });
    setTasks(completedTasks);
  }

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
          onChangeText={setTaskDescription}
          value={taskDescription}
        />
        <TouchableOpacity style={styles.button} onPress={handleAddTask}>
          <Image style={styles.buttonText} source={plus} />
        </TouchableOpacity>
      </View>

      <View style={styles.info}>

        <View style={{ flexDirection: 'row' }}>
          <Text style={{ fontSize: 14, fontWeight: 'bold', color: '#4EA8DE' }}>Criadas</Text>
          <View style={styles.infoCounter}>
            <Text style={{ fontSize: 12, fontWeight: 'bold', color: 'white' }}>{tasks.length}</Text>
          </View>
        </View>

        <View style={{ flexDirection: 'row' }}>
          <Text style={{ fontSize: 14, fontWeight: 'bold', color: '#8284FA' }}>Concluídas</Text>
          <View style={styles.infoCounter}>
            <Text style={{ fontSize: 12, fontWeight: 'bold', color: 'white' }}>{completedTasks}</Text>
          </View>
        </View>
      </View>

      <View style={styles.tasks}>

        <FlatList
          style={{ width: '100%' }}
          data={tasks}
          renderItem={({ item, index }) => (
            <Task
              task={item}
              key={index}
              onRemove={() => handleRemoveTask(item.description, item.id)}
              onComplete={handleCountCompletedTasks}
            />
          )}
          showsVerticalScrollIndicator={false}
          ListEmptyComponent={() => (
            <View style={{ justifyContent: 'center', alignItems: 'center', borderTopColor: '#333333', borderTopWidth: 0.5 }}>
              <Image style={styles.clipboard} source={clipboard} alt='Clipboard' />
              <Text style={{ fontSize: 14, fontWeight: 'bold', color: '#808080' }}>Você ainda não tem tarefas cadastradas</Text>
              <Text style={{ fontSize: 14, color: '#808080' }}>Crie tarefas e organize seus itens a fazer</Text>
            </View>
          )}
        />
      </View>
    </View>
  );
}