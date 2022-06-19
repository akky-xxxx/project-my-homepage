type GetRandomImage = <T>(imagePaths: T[]) => T

export const getRandomImage: GetRandomImage = (imagePaths) => {
  /* eslint-disable no-magic-numbers */
  const randomIndex = Math.round(Math.random() * (imagePaths.length - 1))
  return imagePaths[randomIndex]
  /* eslint-enable no-magic-numbers */
}
