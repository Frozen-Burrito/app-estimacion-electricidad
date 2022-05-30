// Declaraciones de tipos para irradiancia-solar-app 1.0.0
// Proyecto: irradiancia-solar-app
// Definiciones por: Frozen Burrito <https://github.com/Frozen-Burrito>

export as namespace pathsApp;

/*~ Puedes delcarar los tipos que estarán disponibles al importar el módulo */
export interface IUser {
	uid: string;
	email: string | null;
	displayName: string | null;
	providerId: string;
	creationTime: string;
}

export interface INavRouteItem {
    label: string;
    path: string;
}