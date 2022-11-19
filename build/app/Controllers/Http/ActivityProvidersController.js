"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class ActivityProvidersController {
    async json_params_url() {
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
                        ],
                        "type": "array"
                    }
                ], "type": "array"
            }
        ];
    }
    async user_url({ request }) {
        const url = request.protocol() + "://" + request.host() + "/atividade/" + request.params().activityID;
        return { "url": url };
    }
    async deploy({ request }) {
        return request.body();
    }
    async analytics_list_url() {
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
        ];
    }
    async analytics_url({ request }) {
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
        ];
    }
}
exports.default = ActivityProvidersController;
//# sourceMappingURL=ActivityProvidersController.js.map