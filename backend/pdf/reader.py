from PyPDF2 import PdfReader
def readPDF(filepath):
	reader = PdfReader(filepath)
	text = ""
	for page in reader.pages:
		text += page.extract_text() + '\n'
	return text

def readPDFfirst(filepath):
	reader = PdfReader(filepath)
	return reader.pages[0].extract_text()


if __name__ == "__main__":
	print(readPDF("Final_Project_CS171_Spring2023.pdf"))