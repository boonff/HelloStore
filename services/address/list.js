let addressResolvers = [];

/** 获取一个地址选择 Promise */
export const getAddressPromise = () =>
    new Promise((resolve, reject) => {
        addressResolvers.push({ resolve, reject });
    });

/** 用户选择了一个地址 */
export const resolveAddress = (address) => {
    console.log("address:", address)
    addressResolvers.forEach(({ resolve }) => resolve(address));
    addressResolvers = [];
};

/** 用户取消选择 */
export const rejectAddress = () => {
    addressResolvers.forEach(({ reject }) => reject(new Error('cancel')));
    addressResolvers = [];
};
