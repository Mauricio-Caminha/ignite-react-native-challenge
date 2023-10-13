import { View, Text, TouchableOpacity, Image } from 'react-native';

import { styles } from './style';

import trash from '../../../assets/trash.png';
import circleCheckBox from '../../../assets/circleCheckBox.png';
import selectedCheckBox from '../../../assets/checkBoxSelected.png';
import { ITask } from '../../@types/ITask';


export function Task({ task, onRemove, onComplete }: { task: ITask, onRemove: () => void, onComplete: (taskId: string) => void }) {
  return (
    <View style={styles.container}>

      <View style={styles.containerCheckBox}>
        {task.isCompleted === false ? (
          <TouchableOpacity
            onPress={() => onComplete(task.id)}>
            <Image style={styles.checkBox} source={circleCheckBox} />
          </TouchableOpacity>
        ) : (
          <TouchableOpacity
            onPress={() => onComplete(task.id)}>
            <Image style={styles.checkBox} source={selectedCheckBox} />
          </TouchableOpacity>
        )}
      </View>

      <View style={styles.containerText}>
        {task.isCompleted === false ? (
          <Text style={{ color: '#F2F2F2', padding: 8, fontSize: 14 }}>{task.description}</Text>
        ) : (
          <Text style={{ color: '#808080', padding: 8, fontSize: 14, textDecorationLine: 'line-through' }}>{task.description}</Text>
        )}
      </View>

      <View style={styles.containerDelete}>
        <TouchableOpacity
          onPress={onRemove}>
          <Image style={styles.deleteButton} source={trash} />
        </TouchableOpacity>
      </View>
    </View>
  );
} 