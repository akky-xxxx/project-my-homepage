type IsSamePhotoIdMain = (photo: { id: number }) => boolean
type IsSamePhotoId = (targetId: number) => IsSamePhotoIdMain

export const isSamePhotoId: IsSamePhotoId = (targetId) => (photo) =>
  photo.id === targetId
