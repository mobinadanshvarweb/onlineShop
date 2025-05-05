export const getCategoriesId = async (cat: string) => {
  try {
    const res = await fetch(
      `https://fakestoreapi.com/products/category/${cat}`
    );

    if (!res.ok) {
      throw new Error(`HTTP error! status: ${res.status}`);
    }

    const data = await res.json();
    return data;
  } catch (error) {
    console.error("خطا در دریافت محصولات:", error);
  }
};
