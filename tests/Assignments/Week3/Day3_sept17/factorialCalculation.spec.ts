import { test } from "@playwright/test";

function factorial(n: number): number {

    if (n < 0) {
        throw new Error("Factorial is not defined for negative numbers");
    }

    let result = 1;

    for (let i = 2; i <= n; i++) {
        result = result * i;
    }

    return result;
}

test("Factorial calculation", () => {

    console.log(factorial(5)); // 120
    console.log(factorial(3)); // 6
    console.log(factorial(0)); // 1
    console.log(factorial(7)); // 5040

    // Negative number example
    try {
        console.log(factorial(-2));
    } catch (error) {
        console.log((error as Error).message);
    }
});