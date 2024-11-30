import time


def iterative_factorial(number):
    factorial = 1
    for i in range(1, number + 1):
        factorial *= i
    return factorial


def recursive_factorial(n):
    if n == 0:
        return 1
    else:
        return n * recursive_factorial(n - 1)


values = [5,10,50,70,100,300,500,800,1000,2000]


for num in values:
   
    start_iterative = time.time()
    result_iterative = iterative_factorial(num)
    end_iterative = time.time()
    duration_iterative = (end_iterative - start_iterative) * 1000  

    start_recursive = time.time()
    result_recursive = recursive_factorial(num)
    end_recursive = time.time()
    duration_recursive = (end_recursive - start_recursive) * 1000  

    print(f"Number: {num}")
    print(f"  Iterative Factorial: {result_iterative}")
    print(f"  Iterative Time: {duration_iterative:.3f} milliseconds")
    print(f"  Recursive Factorial: {result_recursive}")
    print(f"  Recursive Time: {duration_recursive:.3f} milliseconds")
    print("-----------------------------")
