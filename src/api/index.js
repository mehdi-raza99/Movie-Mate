const options = {
	method: 'GET',
	headers: {
		'x-rapidapi-key': '48e0a582e7msh6597a51ffb24162p18de13jsn5f315c0108df',
		'x-rapidapi-host': 'advanced-movie-search.p.rapidapi.com'
	}
};
export const data = async (name) => {
	const url = `https://advanced-movie-search.p.rapidapi.com/search/movie?query=${name}&page=1`;

try {
	const response = await fetch(url, options);
	const result = await response.json()
  return result;
}
  catch (error) {
	console.error(error);
}
}