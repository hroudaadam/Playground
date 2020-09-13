class Bojovnik:
    def __init__(self, jmeno, zivot, utok, obrana, kostka):
        self._jmeno = jmeno
        self._zivot = zivot
        self._max_zivot = zivot
        self._utok = utok
        self._obrana = obrana
        self._kostka = kostka
        self.__zprava = ""

    def __str__(self):
        return str(self._jmeno)

    @property
    def nazivu(self):
        return (self._zivot > 0)

    def graficky_ukazatel(self, aktualni, maximalni):
        celkem = 20
        pocet = int((aktualni/maximalni)*celkem)
        if ((pocet == 0) and self.nazivu):
            pocet = 1
        return "[{0}{1}]".format("#"*pocet, " "*(celkem-pocet))

    def graficky_zivot(self):
        return self.graficky_ukazatel(self._zivot, self._max_zivot)

    def bran_se(self, uder):
        zraneni = uder - (self._obrana + self._kostka.hod())
        if zraneni > 0:
            zprava = "{0} utrpěl zranění {1}".format(self._jmeno,zraneni)
            self._zivot -= zraneni
            if (self._zivot < 0):
                zprava += " a zemřel"
                self._zivot = 0
        else:
            zprava = "{0} odrazil útok".format(self._jmeno)
        self._nastav_zpravu(zprava)

    def utoc(self, souper):
        uder = self._utok + self._kostka.hod()
        zprava = "{0} útočí s úderem za {1}".format(self._jmeno, uder)
        self._nastav_zpravu(zprava)
        souper.bran_se(uder)

    def _nastav_zpravu(self, zprava):
        self.__zprava = zprava

    def vrat_zpravu(self):
        return self.__zprava