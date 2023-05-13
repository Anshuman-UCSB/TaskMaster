from PyPDF2 import PdfReader
def readPDF(filepath):
	reader = PdfReader(filepath)
	text = ""
	for page in reader.pages:
		text += page.extract_text() + '\n'
	return text

if __name__ == "__main__":
	print(readPDF("Final_Project_CS171_Spring2023.pdf"))