/**
 * Created by emanueledivizio on 29/07/17.
 */

import buildImageUrl from './BuildPosterUrl'

export default (data: Object, base_url: string, size: string) => {
  let movies = [];
  data.results.map((movie) => {
    return {
      title: movie.title, overview: movie.overview.split(" ").splice(0,50).join(" ").concat("..."),
      poster: buildImageUrl(movie.poster_path, base_url, size),
      id: movie.id
    }
  }
  ).forEach(movie => movies.push(movie));

  return movies
}



