const baseUrl = process.env.API_BASE_URL;

async function fetchAPI(query) {
  const res = await fetch(`${baseUrl}`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ query }),
  });

  const json = await res.json();

  if (json.errors) {
    throw new Error('Failed to fetch api');
  }

  return json.data;
}

// eslint-disable-next-line import/prefer-default-export
export const getHomeContent = async () => {
  const data = await fetchAPI(`
    query {
      homeContent {
        title,
        description
      }
    }
  `);

  return data?.homeContent;
};
