class Kostka:
    def __init__(self, pocet_sten=6):
        self.__pocet_sten = pocet_sten

    def vrat_pocet_sten(self):
        return self.__pocet_sten
    
    def hod(self):
        import random as _random
        return _random.randint(1,self.__pocet_sten)

    def __str__(self):
        return str("{0}-stěnná kostka".format(self.__pocet_sten))