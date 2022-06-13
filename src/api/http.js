

const uniRequest = (option) => {
    return new Promise((resolve, reject) => {
        uni.request({
            ...option,
            success: resolve,
            fail: reject
        })
    })
}


// export function get()
