const BASE_API_URL = "https://api.magicthegathering.io";
// docs https://docs.magicthegathering.io/

export async function getAllProducts() {
    try {
        const response = await fetch(`${BASE_API_URL}/v1/cards`);
        if (!response.ok) {
            throw new Error("failed to fetch the products");
        }

        const data = await response.json();

        const jsonString = JSON.stringify(data);
        const byteLength = new TextEncoder().encode(jsonString).length;
        const kb = (byteLength / 1024).toFixed(2);
        const mb = (byteLength / 1024 / 1024).toFixed(4);

        console.log(`Fetched JSON size: ${byteLength} bytes (${kb} KB, ${mb} MB)`);

        return data;
    } catch (error) {
        console.error(error);
        return [];
    }
}

export async function getSingleProduct(id) {
    try {
        const response = await fetch(`${BASE_API_URL}/v1/cards/${id}`);
        if (!response.ok) {
            throw new Error("Failed to fetch specified category");
        }
        const data = await response.json();
        return data;

    } catch (e) {
        console.error(e);
        return [];
    }
}