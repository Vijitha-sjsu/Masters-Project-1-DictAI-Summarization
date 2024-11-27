import React, { useState } from 'react';
import { View, Text, StyleSheet, ScrollView, TextInput, TouchableOpacity } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Ionicons } from '@expo/vector-icons';

const mockEntries = [
  { date: '2023-06-03', content: 'Attended an inspiring webinar on AI advancements. It gave me new ideas for my own projects.' },
  { date: '2023-06-02', content: 'I struggled with motivation today, but managed to complete my daily tasks. Need to focus on better time management.' },
  { date: '2023-06-01', content: 'Today was a productive day. I finished my project ahead of schedule and had time for a relaxing evening walk.' },
];

export default function DiaryScreen() {
  const [entry, setEntry] = useState('');
  const [isRecording, setIsRecording] = useState(false);

  const handleVoiceEntry = () => {
    setIsRecording(!isRecording);
    // Here you would implement actual voice recording functionality
    if (isRecording) {
      alert('Voice recording stopped. Transcription would be added to the entry.');
    } else {
      alert('Voice recording started. Speak your diary entry.');
    }
  };

  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.title}>My Diary</Text>
      <ScrollView style={styles.entriesContainer}>
        {mockEntries.map((entry, index) => (
          <View key={index} style={styles.entryCard}>
            <View style={styles.entryHeader}>
              <Ionicons name="calendar" size={16} color="#6366f1" />
              <Text style={styles.entryDate}>{entry.date}</Text>
            </View>
            <Text style={styles.entryContent}>{entry.content}</Text>
          </View>
        ))}
      </ScrollView>
      <View style={styles.inputContainer}>
        <TextInput
          style={styles.input}
          value={entry}
          onChangeText={setEntry}
          placeholder="Write your diary entry here..."
          multiline
        />
        <TouchableOpacity
          style={[styles.iconButton, isRecording && styles.recordingButton]}
          onPress={handleVoiceEntry}
        >
          <Ionicons name="mic" size={24} color={isRecording ? 'white' : '#6366f1'} />
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.iconButton}
          onPress={() => alert('Entry submitted')}
        >
          <Ionicons name="send" size={24} color="#6366f1" />
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f3f4f6',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 16,
    color: '#6366f1',
    paddingHorizontal: 16,
  },
  entriesContainer: {
    flex: 1,
    paddingHorizontal: 16,
  },
  entryCard: {
    backgroundColor: 'white',
    borderRadius: 8,
    padding: 16,
    marginBottom: 16,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
  },
  entryHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 8,
  },
  entryDate: {
    fontSize: 14,
    fontWeight: '500',
    marginLeft: 8,
    color: '#6366f1',
  },
  entryContent: {
    fontSize: 14,
    color: '#4b5563',
  },
  inputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: 'white',
    padding: 8,
    borderTopWidth: 1,
    borderTopColor: '#e5e7eb',
  },
  input: {
    flex: 1,
    height: 40,
    backgroundColor: '#f3f4f6',
    borderRadius: 20,
    paddingHorizontal: 16,
    marginRight: 8,
  },
  iconButton: {
    padding: 8,
    borderRadius: 20,
    backgroundColor: '#f3f4f6',
  },
  recordingButton: {
    backgroundColor: '#ef4444',
  },
});

