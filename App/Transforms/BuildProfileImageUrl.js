export default (imgPath: string, config: Object) => {
  return config.images.base_url + config.images.profile_sizes[1] + imgPath;
}
