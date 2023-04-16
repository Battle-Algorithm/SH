def solution(arr):
    return [tpl[1] for tpl in zip([-1] + arr[:-1], arr) if tpl[0] != tpl[1]]
