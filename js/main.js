"use strict";

const personalMovieDB = {
	count: 0,
	movies: {},
	actors: {},
	genres: [],
	privat: false,

	start: function () {
		personalMovieDB.count = +prompt("Сколько фильмов вы уже посмотрели?", "");

		while (personalMovieDB.count == "" || personalMovieDB.count == null || isNaN(personalMovieDB.count)) {
			personalMovieDB.count = +prompt("Сколько фильмов вы уже посмотрели?", "");
		}
	},

	rememberMyFilms: function () {
		for (let i = 0; i < 2; i++) {
			const a = prompt("Ваш последний просмотренный фильм?", ""),
				b = prompt("Оценка фильма?", "");

			if (a != null && b != null && a != "" && b != "" && a.length < 50) {
				personalMovieDB.movies[a] = b;
				console.log("Done");
			} else {
				console.log("error");
				i--;
			}
		}
	},

	detectPersonalLevel: function () {
		if (personalMovieDB.count < 10) {
			console.log("Просмотрено мало фильмов");
		} else if (10 < personalMovieDB.count < 30) {
			console.log("Вы классический зритель");
		} else if (personalMovieDB.count > 30) {
			console.log("Вы киноман");
		} else {
			console.log("Ошибка");
		}
	},
	showMyDB: function (hidden) {
		if (!hidden) {
			console.log(personalMovieDB)
		}
	},
	toggleVisibleMyDB: function() {
		if(personalMovieDB.privat) {
			personalMovieDB.privat=false;
		} else {
			personalMovieDB.privat=true;
		}
	},
	writeYourGenres: function () {
		for (let i = 1; i < 4; i++) {
		   // for (let i = 1; i<2; i++) {
			// 	const genre = prompt(`Напишите любимые жанры через запятую`);
			// }
			// if (genre === "" || genre === null) {
			// 	console.log("Вы ввели некорректные данные");
			// 	i--;
			// } else {
			// 	personalMovieDB.genres = genre.split(", ");
			// 	personalMovieDB.genres = genre.sort();
			// } альтернативный вариант
			const genre = prompt(`Ваш любимый жанр под номером ${i}`);
			if (genre === "" || genre === null) {
				console.log("Вы ввели некорректные данные");
				i--;
			} else {
				personalMovieDB.genres[i - 1] = genre;
			}
			
		}
		personalMovieDB.genres.forEach((item, i) => {
			console.log (`Любимый жанр ${i+1} - это ${item} `);
		});
	}
};
// personalMovieDB.start();
// personalMovieDB.rememberMyFilms();
// personalMovieDB.detectPersonalLevel();
// personalMovieDB.showMyDB(personalMovieDB.privat);
personalMovieDB.writeYourGenres();




