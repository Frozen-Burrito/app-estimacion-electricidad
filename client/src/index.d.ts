// Declaraciones de tipos para irradiancia-solar-app 1.0.0
// Proyecto: irradiancia-solar-app
// Definiciones por: Frozen Burrito <https://github.com/Frozen-Burrito>

export as namespace irradianciaSolarCliente;

/*~ Puedes delcarar los tipos que estarán disponibles al importar el módulo */
export interface IBlogResponse {
	_id: string;
	title: string;
	creationTime: string;
	lastUpdated: string;
	author: {
        _id: string;
        displayName: string;
        avatarUrl: string;
    };
	imageUrl: string;
	shortDescription: string;
	mdContent: string;
}

export interface IService {
	_id: string;
	name: string;
	creationTime: string;
	imageUrl: string;
	description: string;
	features: string[];
	price: number;
	discountPercent: number;
}

export interface INavRouteItem {
    label: string;
    path: string;
}