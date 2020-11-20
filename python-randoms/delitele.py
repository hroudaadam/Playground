from math import ceil

def get_factors(number):
    factors = []
    for i in range(1,int(ceil(number**(1/2)))):
        if (number % i == 0):
            factors.append(i)
            factors.append(int(number/i))           
    return sorted(factors)

number = int(input("Enter number: "))
print(get_factors(number))