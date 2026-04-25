;//Définition de pi
(define pi (* 4 (atan 1.0)))
Retourne le volume d’un cylindre de rayon r et de hauteur h
(define (calcul-volume-cylindre r h)
(* pi r r h))
Test
(calcul-volume-cylindre 1 3)
Somme des volumes de deux cylindres
(+ (calcul-volume-cylindre 1 3) (calcul-volume-cylindre 5 7))

 //Définition de pi
 <?php
 function calculVolumeCylindre($r, $h) {
    $pi = 4 * atan(1.0);
    return $pi * $r * $r * $h;
}
echo calculVolumeCylindre(1, 3) . "\n";
echo calculVolumeCylindre(1, 3) + calculVolumeCylindre(5, 7) . "\n";