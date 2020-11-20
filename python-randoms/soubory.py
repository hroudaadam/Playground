from os import mkdir, rename
from pathlib import Path
from random import randint
from shutil import copytree
import csv

def write_randint_into_file():
    with open('test.txt', 'a') as my_file:
        my_file.writelines("Hello {0}\n".format(randint(0,100)))

def read_csv_file():
    with open('atributes.csv', 'r') as my_file:
        csv_reader = csv.reader(my_file, delimiter=' ')
        for row in csv_reader:
            print(row[0])

def create_tree():
    path = Path("A:/")

    for i in range(10):
        path = path / str(i)
        try:
            mkdir(path)
        except:
            print("Chyba")

def create_folder_with_names():
    path = Path("A:/TEST")

    names = ((1,2,3),(4,5,6),(7,8,9))

    try:
        mkdir(path)
    except Exception as exception:
        print(exception)

    for i,j,k in names:
        with open(path / "{0}.txt".format(i), 'w') as my_file:
            my_file.write("{0}\t{1}\t{2}\n".format(i,j,k))

def copy_tree():
    copytree("A:/0","A:/Audioknihy/0")

