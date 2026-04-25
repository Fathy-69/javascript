 #1.1 Déclarez une liste appelée « crayons » et ajoutez 3 couleurs de votre choix. Quel est le type de cette variable ?
crayons = ["rouge", "bleu", "vert"]
print(type(crayons))    
# 1.2. Écrivez une boucle « for » qui parcourt la liste de crayons et affiche chaque couleur.
for crayon in crayons:
    print(crayon)

#1.3. Écrivez une instruction if-else qui affiche « Crayon rare » si la couleur est « bleu », « Crayon commun » si la couleur est « rouge » et « Crayon extra » autrement.
for crayon in crayons:
    if crayon == "bleu":
        print("Crayon rare")
    elif crayon == "rouge":
        print("Crayon commun")
    else:
        print("Crayon extra")
#2.1. Écrivez une fonction appelée « ajouterCouleur » qui prend une liste et une couleur en arguments et ajoute la couleur à la liste.
def ajouter_couleur(liste, couleur):
    liste.append(couleur)   
#2.2. Écrivez une fonction appelée « supprimerCouleur » qui prend une liste et une couleur en arguments et supprime la couleur de la liste.
def supprimer_couleur(liste, couleur):
    if couleur in liste:
        liste.remove(couleur)    
#2.3. Écrivez une fonction appelée « rechercherCouleur » qui prend une liste et une couleur en arguments. Elle renvoie « True » si la couleur est dans la liste et « False » sinon. Utilisez une boucle pour parcourir la liste.
def rechercher_couleur(liste, couleur):
    for c in liste:
        if c == couleur:
            return True
    return False    

