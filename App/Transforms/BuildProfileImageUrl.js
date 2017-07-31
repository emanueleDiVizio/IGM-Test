export default (imgPath: string, config: Object) => {
  return config.images.secure_base_url + config.images.profile_sizes[1] + imgPath;
}
