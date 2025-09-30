/**
 * 读取文件并编码为 base64
 * @param {string} filePath - 文件路径
 * @returns {Promise<string>} 返回 base64 字符串
 */
export function readFileAsBase64(filePath) {
    return new Promise((resolve, reject) => {
        const fileSystem = wx.getFileSystemManager();
        fileSystem.readFile({
            filePath,
            encoding: 'base64',
            success: res => resolve(res.data),
            fail: err => reject(err)
        });
    });
}
