/**
 * Created by emanueledivizio on 30/07/17.
 */
import buildPosterUrl from './BuildPosterUrl'
import buildProfileImageUrl from './BuildProfileImageUrl'

function generateImagesForCreditMembers(member, base_url, size) {
  member.profile_path = member.profile_path ? buildProfileImageUrl(member.profile_path, base_url, size) : "";
  return member
}


export default (movie: Object, base_url: string, size: string) => {

  return {
    id: movie.id,
    poster: buildPosterUrl(movie.poster_path, base_url, size),
    genres: movie.genres,
    cast: movie.credits.cast.map(member => generateImagesForCreditMembers(member, base_url, size)),
    director: movie.credits.crew.find(member => member.job == "Director").name,
    reviews: movie.reviews,
    videos: movie.videos,
    runtime: movie.runtime,
    rating: movie.vote_average,
    title: movie.original_title,
    overview: movie.overview,
  }
}
