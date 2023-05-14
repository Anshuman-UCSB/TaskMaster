import os
import openai
from dotenv import load_dotenv
load_dotenv()

class GPT:
	def __init__(self,base_prompt):
		openai.api_key = os.getenv("OPENAI_API_KEY")
		self.messages = [
			{"role": "system", "content": base_prompt},
		]

	def ask(self, message):
		self.messages.append({"role": "user", "content": message})
		response = openai.ChatCompletion.create(
			model="gpt-3.5-turbo",
			temperature=0,
			messages=self.messages
		)
		self.messages.pop()
		return response["choices"][0]["message"]['content']

if __name__=="__main__":
	gpt = GPT("respond only with the nerd emoji")
	print(gpt.ask("hello"))