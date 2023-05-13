import openai
import os
from dotenv import load_dotenv

load_dotenv()
# Set up OpenAI API credentials
openai.api_key = os.getenv("OPENAI_API_KEY")

# Define the prompt for the conversation
prompt = "Let's chat about artificial intelligence."

# Define the OpenAI API parameters
model_engine = "text-davinci-002"
temperature = 0.5
max_tokens = 100
stop_sequence = "\n\n"

def ask(prompt):
	response = openai.Completion.create(
		model="text-davinci-003",
		prompt=prompt,
		temperature=0,
		max_tokens=100
	)
	return response.choices[0].text.strip()
print(ask("what is pi"))