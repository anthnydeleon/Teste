def isFibonnacci(number):
    n1 = 0;
    n2 = 1;
    n3 = 0;

    while n3 < number:
        n3 = n1 + n2
        n1 = n2
        n2 = n3

    return n3 == number;

number = int(input("Digite o número para saber se pertence à sequência de Fibonacci: "));

if isFibonnacci(number):
  print(f"O número {number} pertence à sequência Fibonacci")
else:
  print(f"O número {number} não pertence à sequência Fibonacci");