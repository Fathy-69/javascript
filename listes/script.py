#déclaration d'une liste
ma_liste = [1, 2, 3, 4, 5]
ma_liste2 = ["Alice", "Bob", "Charlie"]
print("Ma liste :", ma_liste)
print("Ma liste 2 :", ma_liste2)

# Accéder à un élément de la liste
print("Premier élément de ma_liste :", ma_liste[0])
print("Troisième élément de ma_liste :", ma_liste[2])
print("Deuxième élément de ma_liste2 :", ma_liste2[1])  

# Modifier un élément de la liste   
ma_liste[2] = 10
print("Ma liste après modification :", ma_liste)

# Ajouter un élément à la liste
ma_liste.append(6)
print("Ma liste après ajout :", ma_liste)

# Supprimer un élément de la liste
del ma_liste[1]
print("Ma liste après suppression :", ma_liste)

# Longueur de la liste
print("Longueur de ma_liste :", len(ma_liste))

# itération avec for...range
print("Parcourir ma_liste avec for...range :")
for i in range(len(ma_liste)):
    print(f"Index {i} : {ma_liste[i]}")     

    
    # itération avec for...in
print("Parcourir ma_liste :")
for element in ma_liste:
    print(element)  

# Vérifier si un élément est dans la liste
if 10 in ma_liste:
    print("10 est dans ma_liste")
else:    print("10 n'est pas dans ma_liste")  

#concaténation de listes
ma_liste3 = ma_liste + ma_liste2
print("Ma liste 3 (concaténation) :", ma_liste3)    

# Trier la liste
ma_liste.sort()
print("Ma liste triée :", ma_liste) 

# Inverser une liste
ma_liste.reverse()
print("Ma liste inversée :", ma_liste) 

# Obtenir l'index d'un élément
index_bob = ma_liste2.index("Bob")
print("Index de Bob dans ma_liste2 :", index_bob)   

# Compter le nombre d'occurrences d'un élément
count_1 = ma_liste.count(1)
print("Nombre d'occurrences de 1 dans ma_liste :", count_1) 

# Vider la liste
ma_liste.clear()
print("Ma liste après vidage :", ma_liste)  

