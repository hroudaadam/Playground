from urllib.request import urlopen

def vypis_kurz():
    with urlopen("http://www.cnb.cz/cs/financni_trhy/devizovy_trh/kurzy_devizoveho_trhu/denni_kurz.txt") as response:
        for line in response:
            line = line.decode('utf-8')               
            if 'euro' in line:
                line.replace("\n", "")
                polozky = line.split("|")
                kurz = (polozky[4])[:6]
                print("1 EUR = " + kurz + " CZK")