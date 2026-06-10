const RAWG_API_URL = 'https://api.rawg.io/api';

module.exports = async function handler(request, response) {
  const apiKey = process.env.RAWG_API_KEY;

  if (!apiKey) {
    return response.status(500).json({
      error: 'RAWG_API_KEY nao foi configurada no ambiente do Vercel.',
    });
  }

  const { path, ...query } = request.query;

  if (!path || Array.isArray(path) || !isAllowedPath(path)) {
    return response.status(400).json({ error: 'Caminho da RAWG invalido.' });
  }

  const rawgUrl = new URL(`${RAWG_API_URL}/${path}`);
  rawgUrl.searchParams.set('key', apiKey);

  for (const [key, value] of Object.entries(query)) {
    if (Array.isArray(value)) {
      value.forEach((item) => rawgUrl.searchParams.append(key, item));
    } else if (value !== undefined) {
      rawgUrl.searchParams.set(key, value);
    }
  }

  const rawgResponse = await fetch(rawgUrl);
  const body = await rawgResponse.text();

  response
    .status(rawgResponse.status)
    .setHeader(
      'content-type',
      rawgResponse.headers.get('content-type') || 'application/json',
    )
    .send(body);
};

function isAllowedPath(path) {
  return /^games(\/\d+)?$/.test(path);
}
