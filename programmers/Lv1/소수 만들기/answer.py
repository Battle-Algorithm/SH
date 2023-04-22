from itertools import combinations

def is_prime_numbers(num):
    for i in range(2, int(num ** 0.5)+1):
        if num % i == 0:
            return False
    return True

def solution(nums):
    answer = 0
    for num_case in list(combinations(nums, 3)):
        if is_prime_numbers(sum(num_case)):
            answer += 1
    return answer