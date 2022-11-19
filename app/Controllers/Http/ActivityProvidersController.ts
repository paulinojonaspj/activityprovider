import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'

export default class ActivityProvidersController {

  //json-params-atividade
  public async json_params_url() {
    return [
      { "desc": "tempo_do_exame_minuto", "type": "integer" },
      {
        "perguntas": [
          { "desc": "pergunta", "type": "text/plain" },
          { "desc": "ponto", "type": "double" },
          {
            "respostas_alternativas": [
              [{ "desc": "alternativa", "type": "text/plain" }],
              { "desc": "alternativa_correta", "type": "text/plain" }
            ]
            , "type": "array"
          }
        ], "type": "array"
      }
    ]
  }


  //deploy-atividade-get
  public async user_url({ request }: HttpContextContract) {
    const url = request.protocol() + "://" + request.host() + "/atividade/" + request.params().activityID;
    return { "url": url,"method":"post"};
    //Retorna a url
  }

  //deploy-atividade-post
  public async deploy({ request }: HttpContextContract) {
    return request.body();
  }

  //lista-analytics-atividade
  public async analytics_list_url() {
    return [
      {
        "quantAnalytics": [
          { "name": "pontos", "type": "double" },

          { "name": "qtd_perguntas_erradas", "type": "integer" },

          { "name": "qtd_perguntas_correctas", "type": "integer" },

          { "name": "qtd_perguntas_brancas", "type": "integer" },

          { "name": "tempo_exame_minuto", "type": "integer" }
        ]
      }
    ]
  }

  //
  public async analytics_url({ request }: HttpContextContract) {

    const activityID = request.params().activityID;
    return [
      {
        "identificacao": [
          { "desc": "activityID", "type": "integer", "value": activityID },
          { "desc": "inveniraCandidatoID", "type": "integer", "value": 1 }
        ],
        "quantAnalytics": [
          { "name": "pontos", "type": "double", "value": 16 },
          { "name": "qtd_perguntas_erradas", "type": "integer", "value": 1 },
          { "name": "qtd_perguntas_correctas", "type": "integer", "value": 5 },
          { "name": "qtd_perguntas_brancas", "type": "integer", "value": 1 },
          { "name": "tempo_exame_minuto", "type": "integer", "value": 30 }
        ]
      }
    ]

  }



}

