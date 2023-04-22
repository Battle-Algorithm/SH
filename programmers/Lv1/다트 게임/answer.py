import math

def solution(dartResult):
    exp = {'S':1, 'D':2, 'T':3}
    operations = []
    num = ''
    for s in dartResult:
        if s.isdigit():
            num += s
        else:
            if s in exp:
                operations.append([int(num)**exp[s], 1])
            else:
                if s == '#':
                    operations[-1][1] *= -1
                else:
                    operations[-1][1] *= 2
                    if len(operations) != 1:
                        operations[-2][1] *= 2
            num = ''
    return sum(map(math.prod, operations))