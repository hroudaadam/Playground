from math import sqrt

while (True):
    print("Kvadratická rovnice")

    a = int(input("A:"))
    b = int(input("B:"))
    c = int(input("C:"))

    d = b**2 - 4*a*c

    if (d > 0):
        print("x1 = {0}".format((-b + sqrt(d))/(2*a))) 
        print("x2 = {0}".format((-b - sqrt(d))/(2*a))) 
    elif (d == 0):
        print("x = {0}", (-b)/(2*a)) 
    else:
        print("imag")