const numberOfFilms = +prompt("Сколько фильмов вы уже посмотрели?", "");
console.log(numberOfFilms);

const personalMovieDB = {
	count: numberOfFilms,
	movies: {

	},
	actors: {

	},
	genres: [

	],
	privat: false,
};

const a = prompt("last watching films?", ""),
	b = prompt("How much your opinion?", ""),
	c = prompt("last watching films?", ""),
	d = prompt("How much your opinion?", "");

personalMovieDB.movies[a] = b;
personalMovieDB.movies[c] = d;

console.log(personalMovieDB);