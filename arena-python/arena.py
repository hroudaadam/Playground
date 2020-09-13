from mag import Mag

class Arena:
    def __init__(self, bojovnik_1, bojovnik_2, kostka):
        self.__bojovnik_1 = bojovnik_1
        self.__bojovnik_2 = bojovnik_2
        self.__kostka = kostka

    def __vykresli(self):
        self.__vycisti_obrazovku()
        print("----- Aréna -----")
        print("Bojovníci: \n")
        self.__vykresli_bojovnika(self.__bojovnik_1)
        print()
        self.__vykresli_bojovnika(self.__bojovnik_2)
        print()

    def __vycisti_obrazovku(self):
        import sys as _sys
        import subprocess as _subprocess
        if _sys.platform.startswith("win"):
            _subprocess.call(["cmd.exe", "/C", "cls"])
        else:
            _subprocess.call(["clear"])

    def __vykresli_bojovnika(self, bojovnik):
        print(bojovnik)
        print("Život: {0}".format(bojovnik.graficky_zivot()))
        if isinstance(bojovnik, Mag):
            print("Mana: {0}".format(bojovnik.graficka_mana()))

    def __vypis_zpravu(self, zprava):
        import time as _time
        print(zprava)
        _time.sleep(0.5)

    def zapas(self):
        print("Vítejte v aréně!")
        print("Dnes se utkají {0} s {1}!".format(self.__bojovnik_1, self.__bojovnik_2))
        print("Zápas může začít...", end=" ")
        input()

        if (self.__kostka.hod() > ((self.__kostka.vrat_pocet_sten())/2)):
           (self.__bojovnik_1, self.__bojovnik_2) = (self.__bojovnik_2, self.__bojovnik_1)

        while (self.__bojovnik_1.nazivu and self.__bojovnik_2.nazivu):
            self.__bojovnik_1.utoc(self.__bojovnik_2)
            self.__vykresli()
            self.__vypis_zpravu(self.__bojovnik_1.vrat_zpravu())
            self.__vypis_zpravu(self.__bojovnik_2.vrat_zpravu())
            if (self.__bojovnik_2.nazivu):
                self.__bojovnik_2.utoc(self.__bojovnik_1)
                self.__vykresli()
                self.__vypis_zpravu(self.__bojovnik_2.vrat_zpravu())
                self.__vypis_zpravu(self.__bojovnik_1.vrat_zpravu())
            print("")