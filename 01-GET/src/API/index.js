export const getPost = async () => {
  try {
    const response = await fetch('https://jsonplaceholder.typicode.com/posts', {
      method: 'GET'
    });

    if (!response.ok) {
      throw new Error("Network response was not ok");
    }

    return await response.json();

  } catch (error) {
    console.error("Fetch error:", error);
  }
};
