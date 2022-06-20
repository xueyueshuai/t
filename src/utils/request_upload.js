export function file_upload(files) {
    if (!files?.length) {
      return Promise.reject('未选择文件')
    }
  
    let formData = new FormData()
    for (let i = 0; i < files.length; i++) {
      if (!(files[i] instanceof File)) {
        return Promise.reject('不是一个文件对象')
      }
      formData.append('file', files[i])
    }
  
    let userCode = store.getters['userInfo']?.code || '0000000000'
    let date = moment().format('YYYY-MM-DD')
    formData.append('directory', userCode + '/' + date)
    formData.append('rename', true)
    formData.append('sign', md5(md5(files[0].name + 'dns-file-server')))
  
    return axios({
      url: config.uploadServer_host + '/uploadMulti',
      method: 'POST',
      data: formData
    }).then(res => {
      let data = res.data;
      if (data && data.success) {
        return data
      }
      Vue.prototype.$notification.error({
        title: '系统提示',
        description: data?.returnMsg || '系统错误'
      })
      return Promise.reject(data?.returnMsg || '系统错误')
    })
  }