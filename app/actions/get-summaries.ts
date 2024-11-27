'use server'

export async function getSummaries() {
  // In a real application, you would fetch this data from a database
  return [
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
  ]
}

