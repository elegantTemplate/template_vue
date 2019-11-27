import $ from 'webpack-zepto'

export default (url, type = 'GET', data) => {
    return new Promise(resolve => {
        $.ajax({
            url,
            type,
            data,
            dataType: 'json',
            contentType: 'application/x-www-form-urlencoded;charset=UTF-8',
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