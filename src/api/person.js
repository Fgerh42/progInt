import api from "@/plugins/axios.js";


export default {

  async list(dados) {

    let data = JSON.parse(localStorage.getItem("data"));
    const parametros = new URLSearchParams(dados).toString() 
    let retorno = {
      ok: 0,
      dados: [],
      msg: '',
      erros: [],
      status: 0
    }
    await api.post(`get`,{access_token:data.data.token})
      .then(function(response) {
        if (response.status === 200) {
          retorno.ok = 1 
          retorno.dados = response.data.data
        }
      }).catch(function (response) {
        retorno.ok = 0
        retorno.msg = response.message
      })
    return retorno
  },
  async save(dados) {
 
    let data = JSON.parse(localStorage.getItem("data"));

    dados.access_token = data.data.token
    let retorno = {
      ok: 0,
      dados: [],
      msg: '',
      erros: [],
      status: 0
    } 
    await api.post(`create`,dados)
      .then(function(response) {
        if (response.status === 200) {
          retorno.ok = 1 
          retorno.dados = response.data.data
        }
      }).catch(function (response) {
        retorno.ok = 0
        retorno.msg = response.message
      })
    return retorno
  },
  async delete(dados) {
   
    let data = JSON.parse(localStorage.getItem("data"));
    let retorno = {
      ok: 0,
      dados: [],
      msg: '',
      erros: [],
      status: 0
    }
    await api.post(`delete`,{access_token:data.data.token,id:dados})
    .then(function(response) {
      if (response.status === 200) {
        retorno.ok = 1 
        retorno.dados = response.data.data
      }
    }).catch(function (response) {
      retorno.ok = 0
      retorno.msg = response.message
    })
  return retorno
  },
  async search(dados) {
   
    let data = JSON.parse(localStorage.getItem("data"));
    let retorno = {
      ok: 0,
      dados: [],
      msg: '',
      erros: [],
      status: 0
    }
    await api.post(`get`,{access_token:data.data.token})
      .then(function(response) {
        if (response.status === 200) {
          retorno.ok = 1 
          let i =0;
          while(i<response.data.data.length){
          if(response.data.data[i].id==dados){
            retorno.dados = response.data.data[i]
          }
            i++
          } 
        }
      }).catch(function (response) {
        retorno.ok = 0
        retorno.msg = response.message
      })
    return retorno
  },
  async edit(dados) {
  
    let data = JSON.parse(localStorage.getItem("data"));
    let retorno = {
      ok: 0,
      dados: [],
      msg: '',
      erros: [],
      status: 0
    }
    dados.access_token = data.data.token
    await api.post(`update`,dados)
      .then(function(response) {
        if (response.status === 200) {
          retorno.ok = 1 
          retorno.dados = response.data.data
        }
      }).catch(function (response) {
        retorno.ok = 0
        retorno.msg = response.message
      })
    return retorno
  },
}