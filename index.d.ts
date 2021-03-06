// Declaraciones de tipos para irradiancia-solar-app 1.0.0
// Proyecto: irradiancia-solar-app
// Definiciones por: Frozen Burrito <https://github.com/Frozen-Burrito>

export as namespace pathsApp;

/*~ Puedes delcarar los tipos que estarán disponibles al importar el módulo */
export interface IUser {
	uid: string;
	email: string | null;
	displayName: string | null;
	avatarUrl: string;
	providerId: string;
	creationTime: string;
}

export interface IBlogPost {
	_id: string;
	title: string;
	creationTime: string;
	author: IUser;
	imageUrl: string;
	shortDescription: string;
	mdContent: string;
}

export interface IProduct {
	_id: string;
	name: string;
	creationTime: string | null;
	imageUrl: string;
	description: string;
	features: string[];
	price: number;
	discountPercent: number;
}