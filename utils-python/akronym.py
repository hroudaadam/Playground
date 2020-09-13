def acronym(text):
    predchozi_mezera = True
    acronym_text = ""
    for c in text:
        if c == " ":
            predchozi_mezera = True
        elif predchozi_mezera:
            acronym_text += c
            predchozi_mezera = False
        else:
            predchozi_mezera = False
    return acronym_text.upper()

text = "Adam Hrouda"
print(acronym(text))