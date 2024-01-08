import {
  StatusBar,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import React, {useState} from 'react';

export default function App(): JSX.Element {
  const [bgcolor, setBgColor] = useState(`#ffffff`);
  const generateColor = () => {
    const hexRange = `0123456789ABCDEF`;
    let color = '#';
    for (let i = 0; i < 6; i++) {
      color += hexRange[Math.floor(Math.random() * 16)];
    }
    setBgColor(color);
  };
  return (
    <>
      <StatusBar backgroundColor={bgcolor} />
      <View style={[styles.container, {backgroundColor: bgcolor}]}>
        <TouchableOpacity onPress={generateColor}>
          <View style={styles.actionBtn}>
            <Text style={styles.actionBtnText}>change bgColor</Text>
          </View>
        </TouchableOpacity>
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  actionBtn: {
    backgroundColor: '#2B2B52',
    borderRadius: 6,
    paddingVertical: 8,
    paddingHorizontal: 10,
  },
  actionBtnText: {
    fontSize: 25,
    color: '#EAF0F1',
  },
});
