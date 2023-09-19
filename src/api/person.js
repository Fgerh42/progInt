import api from "@/plugins/axios.js";


export default {

  async list(dados) {

    const parametros = new URLSearchParams(dados).toString() 
    let retorno = {
      ok: 0,
      dados: [],
      msg: '',
      erros: [],
      status: 0
    }
    await api.get(`counties?${parametros}`)
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
 
    let retorno = {
      ok: 0,
      dados: [],
      msg: '',
      erros: [],
      status: 0
    }
    await api.post(`counties`,dados)
      .then(function(response) {
        if (response.status === 201) {
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
   
    let retorno = {
      ok: 0,
      dados: [],
      msg: '',
      erros: [],
      status: 0
    }
    await api.get(`counties/${dados}`,)
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
  async edit(id,dados) {
  
    let retorno = {
      ok: 0,
      dados: [],
      msg: '',
      erros: [],
      status: 0
    }
    await api.put(`counties/${id}`,dados)
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