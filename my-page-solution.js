// pages/my-page-solution.js
export default async function MyPage() {
  try {
    const response = await fetch('/api/data');
    if (!response.ok) {
      const message = `HTTP error! status: ${response.status}
      ${await response.text()}`;
      throw new Error(message);
    }
    const data = await response.json();
    return <div>Data: {JSON.stringify(data)}</div>;
  } catch (error) {
    console.error('Error fetching data:', error);
    return (
      <div>
        Error loading data: {error.message}
      </div>
    );
  }
}