import math

# Définition de pi
pi = math.pi

# Constantes
volume_minimum = 450
rayon_minimum = 7

# Volume d’un cylindre
def calcul_volume_cylindre(rayon, hauteur):
    return pi * rayon * rayon * hauteur

# Vérifie si accepté
def accepte_cylindre(rayon, hauteur):
    return (calcul_volume_cylindre(rayon, hauteur) > volume_minimum
            and rayon > rayon_minimum)

# Message utilisateur
def informe(accepte):
    return "Cylindre adapté pour l’expérience" if accepte else "Cylindre rejeté"

# Fonction globale
def filtre_cylindre(rayon, hauteur):
    return informe(accepte_cylindre(rayon, hauteur))

# Tests
print(informe(accepte_cylindre(7, 3)))
print(filtre_cylindre(7, 3))

print(informe(accepte_cylindre(2, 3)))
print(filtre_cylindre(2, 3))