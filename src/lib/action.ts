'use server';

import OpenAI from 'openai';

const openai = new OpenAI({
  apiKey: process.env.API_KEY,
});

export async function sendMessage(prevState: any, formData: FormData) {
  const message = formData.get('message');
  try {
    const completion = await openai.chat.completions.create({
      messages: [{ role: 'user', content: `${message}` }],
      model: 'gpt-3.5-turbo',
    });

    return completion.choices[0];
  } catch (err) {
    console.log(err);
    return { message: 'Failed to get a response from openai' };
  }
}
