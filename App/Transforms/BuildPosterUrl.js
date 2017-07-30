export default (imgPath: string, config: Object) => {
  return config.images.base_url + config.images.poster_sizes[4] + imgPath;
}
