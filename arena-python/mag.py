from bojovnik import Bojovnik

class Mag(Bojovnik):
    def __init__(self, jmeno, zivot, utok, obrana, kostka, mana, magicky_utok):
        super().__init__(jmeno, zivot, utok, obrana, kostka)
        self.__mana = mana
        self.__max_mana = mana
        self.__magicky_utok = magicky_utok

    def utoc(self, souper):
        if (self.__mana < self.__max_mana):
            self.__mana += 10
            if (self.__mana > self.__max_mana):
                self.__mana = self.__max_mana
            super().utoc(souper)
        else:
            uder = self.__magicky_utok + self._kostka.hod()
            zprava = "{0} použil magii za {1} hp.".format(self._jmeno, uder)
            self._nastav_zpravu(zprava)
            self.__mana = 0
            souper.bran_se(uder)

    def graficka_mana(self):
        return self.graficky_ukazatel(self.__mana,self.__max_mana)
        
