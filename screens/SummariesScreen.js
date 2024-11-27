import React from 'react';
import { View, Text, StyleSheet, ScrollView } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Ionicons } from '@expo/vector-icons';

const mockSummaries = [
  {
    period: 'Today',
    themes: ['focus', 'productivity'],
    topics: ['work', 'exercise'],
    content: 'Today was a productive day with a focus on work tasks and maintaining a healthy lifestyle.'
  },
  {
    period: 'This Week',
    themes: ['growth', 'learning'],
    topics: ['new skill', 'reading'],
    content: 'This week saw significant progress in learning a new skill and expanding knowledge through consistent reading.'
  },
  {
    period: 'This Year',
    themes: ['achievement', 'balance'],
    topics: ['career', 'personal life'],
    content: 'This year has been marked by notable career achievements while maintaining a healthy work-life balance.'
  }
];

export default function SummariesScreen() {
  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.title}>My Summaries</Text>
      <ScrollView style={styles.summariesContainer}>
        {mockSummaries.map((summary, index) => (
          <View key={index} style={styles.summaryCard}>
            <View style={styles.summaryHeader}>
              <Ionicons name="calendar" size={20} color="#6366f1" />
              <Text style={styles.summaryPeriod}>{summary.period}</Text>
            </View>
            <View style={styles.tagsContainer}>
              <Text style={styles.tagsTitle}>Key Themes:</Text>
              <View style={styles.tags}>
                {summary.themes.map((theme, i) => (
                  <View key={i} style={styles.tag}>
                    <Text style={styles.tagText}>{theme}</Text>
                  </View>
                ))}
              </View>
            </View>
            <View style={styles.tagsContainer}>
              <Text style={styles.tagsTitle}>Frequent Topics:</Text>
              <View style={styles.tags}>
                {summary.topics.map((topic, i) => (
                  <View key={i} style={[styles.tag, styles.outlineTag]}>
                    <Text style={[styles.tagText, styles.outlineTagText]}>{topic}</Text>
                  </View>
                ))}
              </View>
            </View>
            <Text style={styles.summaryContent}>{summary.content}</Text>
          </View>
        ))}
      </ScrollView>
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
  summariesContainer: {
    flex: 1,
    paddingHorizontal: 16,
  },
  summaryCard: {
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
  summaryHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 12,
  },
  summaryPeriod: {
    fontSize: 18,
    fontWeight: 'bold',
    marginLeft: 8,
    color: '#6366f1',
  },
  tagsContainer: {
    marginBottom: 12,
  },
  tagsTitle: {
    fontSize: 14,
    fontWeight: '500',
    marginBottom: 4,
  },
  tags: {
    flexDirection: 'row',
    flexWrap: 'wrap',
  },
  tag: {
    backgroundColor: '#e0e7ff',
    borderRadius: 16,
    paddingVertical: 4,
    paddingHorizontal: 8,
    marginRight: 8,
    marginBottom: 8,
  },
  tagText: {
    color: '#6366f1',
    fontSize: 12,
  },
  outlineTag: {
    backgroundColor: 'transparent',
    borderWidth: 1,
    borderColor: '#6366f1',
  },
  outlineTagText: {
    color: '#6366f1',
  },
  summaryContent: {
    fontSize: 14,
    color: '#4b5563',
  },
});

