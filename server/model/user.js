
const table = 't_user'
const obj = require('../model-base/abase')(table)
const model = require('../model')

obj.createUser = async (userid, ukey) => {
    let options = {
        url: 'https://oapi.dingtalk.com/user/get',
        params: { userid },
    }
    let u = await model.DdConfig.callApi(ukey, options)

    let user = await model.user.create({
        userid: u.userid, openid: u.openId, name: u.name, mobile: u.mobile, email: u.email, avatar: u.avatar, department: u.department[0], jobnumber: u.jobnumber, ukey: ukey, createtime: new Date, accesstime: new Date, god: 1
    })
    return user
}
exports.obj = obj
