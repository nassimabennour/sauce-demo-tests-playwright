1. Objectifs de test

L'objectif du projet est de vérifier le bon fonctionnement de l'application e-commerce [Sauce Demo](https://www.saucedemo.com) via des tests automatisés end-to-end. Ces tests visent à :

⦁	Assurer la non-régression sur les parcours critiques (login, ajout au panier, checkout)
⦁	Vérifier la stabilité de l'interface utilisateur
⦁	Offrir un socle de test réutilisable dans une chaîne CI/CD


2. Périmètre de test

Inclus dans le test :

⦁	Authentification : login/logout
⦁	Parcours d'achat : ajout d'articles au panier, checkout
⦁	Navigation : pages produits, filtre produits
⦁	Interface utilisateur (UI)

Hors périmètre :

⦁	Test de performance
⦁	Test d'accessibilité
⦁	Test API (non exposées)

3. Approche de test

Type de tests :

⦁	Fonctionnels automatisés (UI end-to-end)
⦁	Basés sur les user stories principales
⦁	Organisation en BDD avec Cucumber / Gherkin

Niveaux de test :

⦁	Tests end-to-end (UI)

Techniques de test :

⦁	Tests basés sur les cas d'utilisation
⦁	Tests de transition d'état (connexion, déconnexion)
⦁	Tests de régression manuelle optionnelle (vérification visuelle)

4. Livrables de test

Fichiers `.feature` (scénarios Gherkin)
Fichiers `.steps.ts` (implémentation des steps en TypeScript)
Fichiers de configuration (`playwright.config.ts`, `bdd.config.ts`)
Rapport HTML d'exécution (Playwright Report)
README.md
Test Plan (séparé)
Ce document de stratégie

5. Critères d'entrée / de sortie

Critères d'entrée :

⦁	L'application SauceDemo est accessible (pas down)
⦁	La structure des pages est stable (pas de changements majeurs dans le DOM)

Critères de sortie :

⦁	Tous les scénarios prioritaires (login, panier, checkout) sont passants
⦁	Les tests ont été exécutés avec succès dans l'environnement local
⦁	Aucun blocant (P1) n'a été identifié lors de la dernière exécution

6. Environnements et outils

Environnement :

⦁	Local (VS Code + Node.js)
⦁	GitHub (stockage, suivi des versions, PR)

Outils :

⦁	Playwright (framework de test UI)
⦁	TypeScript (langage)
⦁	Cucumber (BDD)
⦁	Git & GitHub
⦁	Jenkins pour CI

---

7. Risques produit et projet

| Risque identifié                            | Impact potentiel           | Action de mitigation                                   |
| ------------------------------------------- | -------------------------- | ------------------------------------------------------ |
| Le site SauceDemo est inaccessible          | Empêche toute exécution    | Ajouter vérification d’URL dans les tests              |
| Modification de l’UI non prévue             | Les sélecteurs CSS cassent | Utiliser des sélecteurs stables (#id, data-test)       |
| Mauvais jeu de données (utilisateur bloqué) | Cas de test ne passe pas   | Ajouter un step pour sélectionner l'utilisateur adapté |


8. Suivi et métriques

⦁	Nombre de scénarios passants / échoués
⦁	Temps total d'exécution
⦁	Rapport HTML
⦁	Historique des versions Git

 9. Planification (jalons)

| Version | Fonctionnalités couvertes | Branches Git         |
| ------- | ------------------------- | -------------------- |
| V1      | Login                     | `main`, `feat/login` |
| V2      | Panier                    | `feat/cart`          |
| V3      | Checkout                  | `feat/checkout`      |


10. Organisation / rôles

Projet individuel maintenu par "Nassima BENNOUR"


11. Conclusion

Cette stratégie de test suit les lignes directrices du syllabus ISTQB Test Manager. Elle permet de structurer efficacement l’automatisation de l’application Sauce Demo avec une démarche qualitative, réplicable sur d’autres projets.


> Document créé le 4 septembre 2025 par Nassima BENNOUR
