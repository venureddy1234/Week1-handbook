from typing import List
from functools import lru_cache
import time

def recursive_future_value(p: float, r: List[float], y: int = None) -> float:
    if y is None:
        y = len(r) - 1
    if y < 0:
        return p
    return recursive_future_value(p, r, y - 1) * (1 + r[y])

@lru_cache(maxsize=None)
def memo_future_value(p: float, rt: tuple, y: int) -> float:
    if y < 0:
        return p
    return memo_future_value(p, rt, y - 1) * (1 + rt[y])

def iterative_future_value(p: float, r: List[float]) -> float:
    fv = p
    for x in r:
        fv *= (1 + x)
    return fv

def closed_form_future_value(p: float, r: List[float]) -> float:
    prod = 1.0
    for x in r:
        prod *= (1 + x)
    return p * prod

def demo():
    p = 1000.0
    rates = [0.05, 0.04, 0.06, 0.03, 0.07, 0.05]

    t0 = time.time(); fv0 = recursive_future_value(p, rates); t0 = time.time() - t0
    t1 = time.time(); fv1 = memo_future_value(p, tuple(rates), len(rates)-1); t1 = time.time() - t1
    t2 = time.time(); fv2 = iterative_future_value(p, rates); t2 = time.time() - t2
    t3 = time.time(); fv3 = closed_form_future_value(p, rates); t3 = time.time() - t3

    print(fv0, t0, fv1, t1, fv2, t2, fv3, t3)
    print("O(n) time & stack for recursive; memo adds cache overhead; iterative/closed-form is O(n) time, O(1) space")

if __name__ == "__main__":
    demo()

//OUTPUT:

1276.521753 0.00013899803161621094 1276.521753 1.0013580322265625e-05 1276.521753 4.76837158203125e-06 1276.521753 2.6226043701171875e-06
O(n) time & stack for recursive; memo adds cache overhead; iterative/closed-form is O(n) time, O(1) space

