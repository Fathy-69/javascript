#Définition de pi
#(define pi (* 4 (atan 1.0)))
#Retourne le volume d’un cylindre de rayon r et de hauteur h
#(define (calcul-volume-cylindre r h)
#(* pi r r h))

def calcul_volume_cylindre(r, h):
    pi = 3.141592653589793
    return pi * r * r * h

# Test
print(calcul_volume_cylindre(1, 3))
print(calcul_volume_cylindre(5, 7))
