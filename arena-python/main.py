from kostka import Kostka
from bojovnik import Bojovnik
from arena import Arena
from mag import Mag

kostka = Kostka(10)
zalgoren = Bojovnik("Zalgoren", 100, 20, 10, kostka)
shadow = Mag("Shadow", 100, 20, 10, kostka, 30, 45)
arena = Arena(zalgoren, shadow, kostka)
arena.zapas()
input()