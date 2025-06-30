from typing import List
import time

def iterative_future_value(p: float, r: List[float]) -> float:
    fv = p
    for x in r:
        fv *= (1 + x)
    return fv

def demo():
    p = 1000.0
    rates = [0.05, 0.04, 0.06]
    fv = iterative_future_value(p, rates)
    print(f"Future value: {fv}")

if __name__ == "__main__":
    demo()