'use server';

import OpenAI from 'openai';

const openai = new OpenAI({
  apiKey: process.env.API_KEY,
});

export async function sendMessage(prevState: any, formData: FormData) {
  const message = formData.get('message');
  const completion = await openai.chat.completions.create({
    messages: [{ role: 'user', content: `${message}` }],
    model: 'gpt-3.5-turbo',
  });

  console.log(completion.choices[0]);

  return {
    response: { role: 'assistant', message: 'Hello from the assistant' },
  };
}
