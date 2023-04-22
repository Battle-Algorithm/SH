from collections import Counter

def solution(N, stages):
    counter = Counter(stages)
    cnt = [counter[i] for i in range(1, N+2)]

    correct = sorted([(-cnt[i] / sum(cnt[i:]) if sum(cnt[i:]) != 0 else 0, i+1) for i in range(N)])
    return list(map(lambda c:c[1], correct))