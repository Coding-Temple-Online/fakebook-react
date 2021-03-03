export function findProduct(aList, p) {
    for (let i = 0; i < aList.length; i++) {
        const product = aList[i];
        if (p.id === product.id) {
            return true
        }
    }
}