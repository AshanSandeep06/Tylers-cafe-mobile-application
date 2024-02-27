import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import Modal from 'react-native-modal';

const CustomAlert = ({ isVisible, onClose, title, message }) => {
  return (
    <Modal isVisible={isVisible} onBackdropPress={onClose}>
      <View style={{ backgroundColor: 'white', padding: 20, borderRadius: 10 }}>
        <Text style={{ fontSize: 18, fontWeight: 'bold', marginBottom: 10 }}>{title}</Text>
        <Text style={{ fontSize: 16 }}>{message}</Text>
        <TouchableOpacity onPress={onClose} style={{ marginTop: 20, alignSelf: 'flex-end' }}>
          <Text style={{ color: 'blue', fontSize: 16 }}>Close</Text>
        </TouchableOpacity>
      </View>
    </Modal>
  );
};

export default CustomAlert;