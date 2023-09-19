import api from "@/plugins/axios.js";

export default {

  async login (dados) { 

    let retorno = {
      ok: 0,
      dados: [],
      msg: '',
      erros: [],
      status: 0
    }
    console.log(dados)
    await api.post('login', dados)
      .then(function(response) { 
        if (response.status === 200) {
          retorno.ok = 1
          retorno.msg = "Sucesso!"
          retorno.dados = response
        }
      }).catch(function (response) { 
        retorno.ok = 0
        retorno.msg = response.message
      })
    return retorno
  },

  async logout (dados) {
    let retorno = {
      ok: 0,
      dados: [],
      msg: '',
      erros: [],
      status: 0
    }
    await api.post('logout', dados)
      .then(function(response) {
        if(response.status === 200) {
          retorno.ok = 1
          retorno.msg = ''
        }
      }).catch (function() {
        retorno.ok = 0
        retorno.msg = ''
      })
    return retorno
  },

  async me(){
    let retorno = {
      ok: 0,
      dados: [],
      msg: '',
      erros: [],
      status: 0
    }
    await api.get('me')
      .then(function(response) {
        if(response.status === 200) {
          retorno.ok = 1
          retorno.msg = ''
          retorno.dados = response.data
        }
      }).catch (function() {
        retorno.ok = 0
        retorno.msg = ''
      })
    return retorno
  }
}