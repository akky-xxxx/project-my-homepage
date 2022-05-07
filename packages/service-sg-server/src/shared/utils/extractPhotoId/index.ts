type ExtractPhotoId = (photo: { id: number }) => number

export const extractPhotoId: ExtractPhotoId = (photo) => photo.id
