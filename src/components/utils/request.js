import $ from 'webpack-zepto'

export default (url, type = 'GET', data) => {
    return new Promise(resolve => {
        $.ajax({
            url,
            type,
            data,
            xhrFields: {
                withCredentials: true
              },
            beforeSend() {
            },
            success(data) {
                resolve(data)
            }
        })
    })
}