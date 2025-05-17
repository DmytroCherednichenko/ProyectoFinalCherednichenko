const BASE_API_URL = "https://api.magicthegathering.io";
// docs https://docs.magicthegathering.io/

export async function getAllProducts() {
    try {
        const response = await fetch(`${BASE_API_URL}/v1/cards`);
        if (!response.ok) {
            throw new Error("failed to fetch the products");
        }
        const data = await response.json();
        return data;

    } catch (error) {
        console.error(error);
        return [];
    }
}