//NOTE: ce fichier est un module, il peut exporter des fonctions, des variables, des classes, etc. et les rendre disponibles pour d'autres fichiers qui les importent. Il peut également importer des fonctionnalités d'autres modules pour les utiliser dans son propre code.
//BUG: ce fichier est un module, il peut exporter des fonctions, des variables, des classes, etc. et les rendre disponibles pour d'autres fichiers qui les importent. Il peut également importer des fonctionnalités d'autres modules pour les utiliser dans son propre code.
//FIXME: ce fichier est un module, il peut exporter des fonctions, des variables, des classes, etc. et les rendre disponibles pour d'autres fichiers qui les importent. Il peut également importer des fonctionnalités d'autres modules pour les utiliser dans son propre code.
//TODO: convertir en euro et en dollar
//HACK: export function convertirEnEuro(montant) {
//     return montant * 0.95;
// }

export const convertirEnEuro = (montant) => montant * 0.95;
export const convertirEnDollar = (montant) => montant * 1.10;
const saluer = (nom) => `Bonjour, ${nom}, ravi de vous revoir !`;
export default saluer;
/*export function convertirEnDollar(montant) {
    return montant * 1.10;
}
export const convertirEnDollar = (montant) => {
    return montant * 1.10;
};*/