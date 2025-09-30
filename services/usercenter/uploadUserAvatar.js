import { uploadAvatarApi } from '../../utils/api/user'

export async function uploadAvatar(filePath) {
    return await uploadAvatarApi(filePath)
}