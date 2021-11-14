/**
 * Receber code(string)
 * Recuperar o access_token no github
 * verificar se usuario existe no nosso bd
 *  ---- SIM = Gera um token
 *  ---- NÃO = Cria no BD, Gera um token
 * Retornar o token com as infos do user
 */

import axios from "axios";

class AuthenticateUserService {
    async execute(code : string) {
      const url = "https://github.com/login/outh/access_token";
      
      const response = await axios.post(url, null, {
          params: {
              client_id: process.env.GITHUB_CLIENT_ID,
              cliente_secret: process.env.GITHUB_CLIENT_SECRET,
              code,
          },
          headers: {
              "Accept": "application/json"
          }
      })

      return response.data;

    }

}

export { AuthenticateUserService };