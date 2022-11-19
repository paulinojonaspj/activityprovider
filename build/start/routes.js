"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const Route_1 = __importDefault(global[Symbol.for('ioc.use')]("Adonis/Core/Route"));
Route_1.default.get('/', async () => {
    return { "AP": "Exames de Acesso ao Concurso Público Nacional", "Autor": "Paulino Jonas", "Estudante Nº": "utad80176" };
});
Route_1.default.get('/json-params-atividade', "ActivityProvidersController.json_params_url");
Route_1.default.get('/lista-analytics-atividade', "ActivityProvidersController.analytics_list_url");
Route_1.default.get('/analytics-atividade/:activityID', "ActivityProvidersController.analytics_url");
Route_1.default.get('/deploy-atividade/:activityID', "ActivityProvidersController.user_url");
Route_1.default.post('/atividade/:activityID', "ActivityProvidersController.deploy");
//# sourceMappingURL=routes.js.map