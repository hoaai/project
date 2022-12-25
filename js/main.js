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


for (let i = 0; i < 2; i++) {
	const a = prompt("last watching films?", ""),
		b = prompt("How much your opinion?", "");

	if (a != null && b != null && a != "" && b != "" && a.length < 50) {
		personalMovieDB.movies[a] = b;
		console.log("Done");
	} else {
		console.log("error");
		i--;
	}

}

if (personalMovieDB.count < 10) {
	console.log("Просмотрено мало фильмов");
} else if (10 < personalMovieDB.count < 30) {
	console.log("Вы классический зритель");
} else if (personalMovieDB.count > 30) {
	console.log("Вы киноман");
} else {
	console.log("Ошибка");
}


console.log(personalMovieDB);


