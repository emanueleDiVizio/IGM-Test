export default (imgPath: string, config: Object) => {
  return config.images.secure_base_url + config.images.poster_sizes[4] + imgPath;
}
