function sumArray(nums) {
    let sum = 0;
    for (let i = 0; i < nums.length; i++) {
        sum += nums[i];
    }
    return sum;
}
/******************************************************************************/

function findMax(nums) {
    let max = 0;
    for (let i = 0; i < nums.length; i++){
        if (nums[i] > max) max = nums[i];

    }
    return max;
}
/******************************************************************************/

result = {
    "products": [
        { "id": 1, "name": "Laptop", "category": "Electronics", "price": 1000 },
        { "id": 2, "name": "Book", "category": "Education", "price": 20 },
        { "id": 3, "name": "Phone", "category": "Electronics", "price": 500 },
        { "id": 4, "name": "Pen", "category": "Office", "price": 2 }
    ]
};

function groupByCategory(data) {
    const result = {};

    data.products.forEach(product => {
        const category = product.category;
        const productInfo = {
            productName: product.name,
            price: product.price
        };

        if (!result[category]) {
            result[category] = [];
        }

        result[category].push(productInfo);
    });

    return result;
}
/******************************************************************************/

console.log(sumArray([1, 2 ,4]))
console.log(findMax([14, 164, -6, 3]))
console.log(groupByCategory(result))