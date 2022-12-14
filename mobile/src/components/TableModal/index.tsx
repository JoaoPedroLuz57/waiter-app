import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import { Modal, Platform, TouchableOpacity } from 'react-native';
import { Button } from '../Button';
import { Close } from '../Icons/Close';
import { Text } from '../Text';
import { Body, Form, Header, Input, Overlay } from './styles';

interface TableModalProps {
  visible: boolean;
  onClose: () => void;
  onSave: (table: string) => void;
}

export function TableModal({ visible, onClose, onSave }: TableModalProps) {
  const [table, setTable] = useState('');

  function handleSaveTable() {
    onSave(table);
    onClose();
    setTable('');
  }

  return (
    <Modal transparent visible={visible} animationType="fade">
      <StatusBar style='dark' backgroundColor="rgba(0, 0, 0, 0.6)" />
      <Overlay behavior={Platform.OS === 'android' ? 'height' : 'padding'}>
        <Body>
          <Header>
            <Text weight="600">Informe a mesa</Text>
            <TouchableOpacity onPress={onClose}>
              <Close color="#666666" />
            </TouchableOpacity>
          </Header>
          <Form>
            <Input
              value={table}
              placeholder="Número da mesa"
              placeholderTextColor="#666666"
              keyboardType="number-pad"
              onChangeText={setTable}
            />
            <Button onPress={handleSaveTable} disabled={table.length === 0}>
              Salvar
            </Button>
          </Form>
        </Body>
      </Overlay>
    </Modal>
  );
}
