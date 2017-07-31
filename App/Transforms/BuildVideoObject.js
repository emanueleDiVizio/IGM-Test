/**
 * Created by emanueledivizio on 30/07/17.
 */
import buildPosterUrl from './BuildPosterUrl'
import buildProfileImageUrl from './BuildProfileImageUrl'

function generateImagesForCreditMembers(member, config) {
  member.profile_path = member.profile_path ? buildProfileImageUrl(member.profile_path, config) : "";
  return member
}

function findDirectorName(movie){
  var director = movie.credits.crew.find(member => member.job == "Director")
  if(director){
    return director.name;
  }
  return ""
}


export default (movie: Object, config: Object, isFav: boolean) => {

  return {
    id: movie.id,
    poster: buildPosterUrl(movie.poster_path, config),
    genres: movie.genres,
    cast: movie.credits.cast.map(member => generateImagesForCreditMembers(member, config)),
    director: findDirectorName(movie),
    reviews: movie.reviews,
    videos: movie.videos,
    runtime: movie.runtime,
    rating: movie.vote_average,
    title: movie.original_title,
    overview: movie.overview,
    favorite: isFav
  }
}
