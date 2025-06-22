from typing import List, Optional
import time
import random

class Product:
    def __init__(self, productId: int, productName: str, category: str):
        self.productId = productId
        self.productName = productName
        self.category = category

    def __repr__(self):
        return f"Product(id={self.productId}, name='{self.productName}', category='{self.category}')"

def linear_search(products: List[Product], target: str) -> Optional[Product]:
    for p in products:
        if p.productName == target:
            return p
    return None

def binary_search(products: List[Product], target: str) -> Optional[Product]:
    low, high = 0, len(products) - 1
    while low <= high:
        mid = (low + high) // 2
        mid_name = products[mid].productName
        if mid_name == target:
            return products[mid]
        elif mid_name < target:
            low = mid + 1
        else:
            high = mid - 1
    return None

def generate_products(n: int) -> List[Product]:
    categories = ['Electronics', 'Books', 'Clothing', 'Home']
    products = []
    for i in range(n):
        name = f"Product{random.randint(0, n*10):05d}"
        cat = random.choice(categories)
        products.append(Product(i, name, cat))
    return products

def demo():
    n = 100_000
    products = generate_products(n)
    target = products[n // 2].productName

    # Linear search on unsorted
    start = time.time()
    found_lin = linear_search(products, target)
    t_lin = time.time() - start

    # Prepare sorted
    products_sorted = sorted(products, key=lambda p: p.productName)
    start = time.time()
    found_bin = binary_search(products_sorted, target)
    t_bin = time.time() - start

    print(f"Linear search: found {found_lin} in {t_lin:.6f} sec")
    print(f"Binary search: found {found_bin} in {t_bin:.6f} sec")

    print("\nComplexity summary:")
    print(" - Linear search: O(n) average/worst, O(1) best")
    print(" - Binary search: O(log n) average/worst, O(1) best")

    print("\n Use binary search for large, sorted catalogs due to O(log n) performance.")

if __name__ == "__main__":
    demo()

//OUTPUT:

Linear search: found Product(id=50000, name='Product08432', category='Books') in 0.013274 sec
Binary search: found Product(id=50000, name='Product08432', category='Books') in 0.000091 sec

Complexity summary:
 - Linear search: O(n) average/worst, O(1) best
 - Binary search: O(log n) average/worst, O(1) best

 Use binary search for large, sorted catalogs due to O(log n) performance.

