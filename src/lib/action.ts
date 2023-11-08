'use server';

export async function sendMessage(prevState: any, formData: FormData) {
  await new Promise(resolve => setTimeout(resolve, 3000));

  return {
    response: { role: 'assistant', message: 'Hello from the assistant' },
  };
}
