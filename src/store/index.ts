import { createPinia } from 'pinia';
/*export * from './modules/tag';
export * from './modules/user';
export * from './modules/permission';*/

export function setupStore(app) {
    app.use(createPinia())
}
