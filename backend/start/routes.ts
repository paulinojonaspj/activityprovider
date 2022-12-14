/*
|--------------------------------------------------------------------------
| Routes
|--------------------------------------------------------------------------
|
| This file is dedicated for defining HTTP routes. A single file is enough
| for majority of projects, however you can define routes in different
| files and just make sure to import them inside this file. For example
|
| Define routes in following two files
| ├── start/routes/cart.ts
| ├── start/routes/customer.ts
|
| and then import them inside `start/routes.ts` as follows
|
| import './routes/cart'
| import './routes/customer'
|
*/

import Route from '@ioc:Adonis/Core/Route'

Route.get('/', async () => {
  return {
    "name": "AP - Exames acesso de Concurso Público Nacional",
    "autor": "Paulino Jonas - Nº utad80176",
    "config_url": "https://ap.okutanga.pt/",
    "json_params_url": "https://acti.okutanga.pt/json-params-atividade",
    "user_url": "https://acti.okutanga.pt/deploy-atividade/:activityID",
    "analytics_url": "https://acti.okutanga.pt/analytics-atividade/:activityID",
    "analytics_list_url": "https://acti.okutanga.pt/lista-analytics-atividade"
  }
})

Route.get('/json-params-atividade', "ActivityProvidersController.json_params_url");
Route.get('/lista-analytics-atividade', "ActivityProvidersController.analytics_list_url");
Route.post('/analytics-atividade/:activityID', "ActivityProvidersController.analytics_url");
Route.get('/deploy-atividade/:activityID', "ActivityProvidersController.user_url");
Route.post('/atividade/:activityID', "ActivityProvidersController.deploy");
