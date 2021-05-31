const validate = require('validate.js');
const moment = require('moment');


validate.extend(validate.validators.datetime, {
    /**
     * 该函数会自动用于日期格式的转换
     * 他会在验证时自动触发，他需要将任何数据转换为时间戳并返回
     * 如果无法转换，返回NaN
     * @param {*} value  传入要转换的值
     * @param {*} options 针对某个属性的验证配置
     */
    parse(value, options) {
        let format = ["YYYY-MM-DD hh:mm:ss", "YYYY-M-D h-m-s", "x"];
        if(options.dateOnly) {
            format =  ["YYYY-MM-DD", "YYYY-M-D", "x"]
        }
        return +moment.utc(value, format, true);
    },
    /**
     * 用户显示错误消息时，使用的显示字符串 
     * { birthday: [ 'Birthday must be no later than 2016-02-03' ] }
     */
    format(value, options) {
        let format = options.dateOnly ? "YYYY-MM-DD" : "YYYY-MM-DD hh:mm:ss"
        return moment.utc(value).format(format);
    }
})