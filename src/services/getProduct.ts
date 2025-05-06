export const getCategories = async () => {
  try {
    const res = await fetch("https://fakestoreapi.com/products/categories");

    if (!res.ok) {
      throw new Error(`HTTP error! status: ${res.status}`);
    }

    const data = await res.json();
    return data;
  } catch (error) {
    console.error("خطا در دریافت محصولات:", error);
  }
};
export const getProductId = async (id: string) => {
  try {
    const res = await fetch(`https://fakestoreapi.com/products/${id}`);

    if (!res.ok) {
      throw new Error(`HTTP error! status: ${res.status}`);
    }

    const data = await res.json();
    return data;
  } catch (error) {
    console.error("خطا در دریافت محصولات:", error);
  }
};
