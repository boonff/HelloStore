import { updateGenderApi, uploadAvatarApi } from '../../utils/api/user'
import { updateNickNameApi } from '../../utils/api/user'

export async function uploadAvatar(filePath) {
    return await uploadAvatarApi(filePath)
}

export async function updateNickName(nickName) {
    return await updateNickNameApi(nickName)
}

export async function updateGender(gender) {
    return await updateGenderApi(gender)
}