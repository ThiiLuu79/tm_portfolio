// Constante pour Academics.jsx
export const ACADEMICS_WELCOME = "Voici mes ";
export const ACADEMICS_PROJECT = "Projets Académiques";

// PROJET WEATHERMATE
export const WEATHERMATE_PROJECT = {
    title: "Application Weather Mate",
    period: "Automne 2024 (ÉTS)",
    description: "Dans le cadre du cours de Technologies de développement Internet (GTI525), nous avons été chargés de développer une application météo nommée Weather Mate. Cette application a été conçue pour fournir aux utilisateurs des informations météorologiques en temps réel, y compris la température, la vitesse du vent et les précipitations de chaque province canadienne. L'application a été conçue pour être conviviale, avec une interface intuitive permettant aux utilisateurs de naviguer facilement à travers les différentes fonctionnalités. Pour la première partie, nous avions la responsabilité de développer le front-end et de rassembler les données à partir de fichiers CSV. La deuxième partie consistait à implémenter un back-end pour appeler des APIs externes. Finallement, la troisième partie consistait à intégrer une base de données pour stocker les informations météorologiques des fichiers CSV.",
    contributions: [
        "Analyse des données à partir de fichiers CSV pour afficher les informations météorologiques.",
        "Conception et implémentation du front-end de l'application.",
        "Implémentation de la vue des données et des statistiques, affichant les informations météorologiques de chaque province canadienne.",
        "Utilisation de NodeJs et Express pour créer le back-end de l'application.",
        "Utilisation de MongoDB pour stocker les informations météorologiques des fichiers CSV.",
        "Mise en cache de la réponse des appels API pour améliorer les performances de l'application."
    ],
    tools: [
        "Langage(s) : JavaScript, HTML, CSS",
        "Framework(s) : Vue.js, NodeJS, Express, Axios",
        "Modèle(s) architectural : Micro-frontends",
        "Outil(s) : Git/GitHub, VSCode, MongoDB Compass, Postman, Docker"
    ],
    imgAlt: "weathermate"
};

// PROJET WEBFLIX
export const WEBFLIX_PROJECT = {
    title: "Application Webflix",
    period: "Automne 2023 (ÉTS)",
    description: "Dans le cadre du cours de Bases de Données Haute Performance (LOG660), nous avons été chargés de développer une application Full Stack nommée Webflix, permettant aux clients de louer des films en fonction de leurs abonnements. Notre gestion des données nécessitait l'utilisation d'une base de données Oracle, et l'interaction avec ces données a été réalisée à travers un programme orienté objet. Ce devoir était structuré en trois phases. Dans la phase initiale, nous nous sommes concentrés sur la conception de diagrammes de classes et relationnels pour l'application, adaptés à divers cas d'utilisation. De plus, nous étions responsables de l'importation d'une grande quantité de données dans la base de données à partir d'un fichier XML contenant des milliers d'entrées. Pour la deuxième phase de ce devoir, notre tâche était de concevoir et développer une interface utilisateur (UI) pour l'application. Au sein de cette interface, les clients pouvaient se connecter pour accéder à des informations détaillées sur les films, les acteurs et les réalisateurs. De plus, les clients avec des abonnements éligibles avaient la possibilité de louer des films. Dans la troisième phase, notre tâche incluait l'établissement d'un système de données analytiques pour évaluer les fréquences de location selon différentes dimensions. De plus, nous étions chargés de mettre en œuvre une fonction de recommandation pour chaque film, en obtenant les évaluations des clients à partir d'une base de données externe.",
    contributions: [
        "Dirigé une équipe de quatre étudiants.",
        "Conçu et optimisé le diagramme de classes et relationnel pour l'application Webflix.",
        "Créé les tables de base de données pour l'application Webflix.",
        "Créé des déclencheurs SQL pour implémenter la logique métier au sein de la base de données.",
        "Inséré des entrées de données dans la base de données à partir d'un fichier XML donné en utilisant JDBC.",
        "Créé un pont entre un programme orienté objet et une base de données relationnelle en utilisant un ORM (Hibernate).",
        "Implémenté l'interface utilisateur en utilisant Java et JavaSwing incluant un système de connexion, une fenêtre de recherche de films et une fenêtre de détails de film.",
        "Créé un manuel utilisateur pour aider le client à utiliser l'application.",
        "Conçu et optimisé le schéma étoile pour le système de données analytiques.",
        "Utilisé le processus ETL (Extract, Transform, Load) pour transformer les données et les insérer de manière transparente dans les tables de faits et de dimensions."
    ],
    tools: [
        "Langage(s) : Java, SQL, PLSQL, HQL, JDBC, UML, ERD, XML",
        "Base de données : Oracle",
        "Framework(s) : Hibernate, JavaSwing",
        "Modèle(s) de conception : Data Access Object (DAO), Singleton",
        "Outil(s) : Git/GitHub, IntelliJ, Visual Paradigm, SQL Developer"
    ],
    imgAlt: "webflix"
};

// PROJET PUSHERS
export const PUSHERS_PROJECT = {
    title: "Jeu de Pushers",
    period: "Hiver 2023 (ÉTS)",
    description: "Dans le cadre du cours de Structures de Données et Algorithmes (LOG320), en nous donnant un jeu de plateau, nous avions pour tâche d'implémenter une IA qui détermine les meilleurs mouvements à jouer dans ce jeu. Le jeu s'appelle Pushers, où le joueur doit atteindre la dernière rangée de l'adversaire en déplaçant ses pièces. Les règles sont simples : les Pushables sont les petites pièces et ne peuvent être poussées que par les pushers. Les Pushers sont les plus grandes pièces et peuvent se déplacer par eux-mêmes. Les pièces peuvent se déplacer vers le haut ou en diagonale, mais pas en arrière ou latéralement. Les pièces ne peuvent capturer qu'en diagonale. L'IA a été implémentée en utilisant l'algorithme minimax avec élagage pour évaluer tous les mouvements possibles. Une fonction d'évaluation statique a également été implémentée afin de déterminer la stratégie de l'IA.",
    contributions: [
        "Implémenté un générateur de mouvements qui retourne tous les mouvements possibles dans un tour.",
        "Implémenté l'algorithme minimax avec élagage pour évaluer tous les mouvements possibles.",
        "Implémenté une fonction d'évaluation statique afin de déterminer la stratégie de l'IA."
    ],
    tools: [
        "Langage(s) : Java",
        "Algorithme(s) : MiniMax, Élagage Alpha-Bêta, Récursif",
        "Structure(s) de données : Tableaux 2D",
        "Outil(s) : Git/GitHub, IntelliJ"
    ],
    imgAlt: "pushers"
};

// PROJET CHAÎNE DE PRODUCTION
export const CHAIN_PROJECT = {
    title: "Simulation de Chaîne de Production",
    period: "Automne 2022 (ÉTS)",
    description: "Dans le cadre du cours de Programmation et Conception Orientées Objet (LOG121), nous avons travaillé sur la création d'une chaîne de production simulée pour la fabrication d'avions. Cela impliquait de coordonner les différentes usines nécessaires à la production d'avions. Par exemple, les usines de métal fabriquaient du métal, qui était ensuite transporté vers les usines d'ailes et de moteurs pour l'assemblage. L'étape finale consistait à envoyer les ailes et les moteurs à une usine d'assemblage pour construire l'avion complet. Ces avions étaient stockés dans un entrepôt avant d'être libérés sur le marché à des moments définis ou de manière aléatoire. L'entrepôt avait une capacité maximale, donc la production s'arrêtait lorsqu'il était plein. Avant de commencer le codage réel, nous avons planifié le système en créant des diagrammes de classes UML et des diagrammes de séquence, détaillant le fonctionnement du système.",
    contributions: [
        "Création d'un diagramme conceptuel du système avec UML.",
        "Implémenté la chaîne de production avec Java et JavaSwing.",
        "Appliqué le modèle de conception observateur et stratégie pour rendre le code plus maintenable."
    ],
    tools: [
        "Langage(s) : Java, XML, UML",
        "Framework(s) : JavaSwing",
        "Modèle(s) de conception : Observateur, Stratégie, Singleton",
        "Outil(s) : Git/GitHub, IntelliJ, Visual Paradigm"
    ],
    imgAlt: "chain"
};

// PROJET PAGES OPAC DE KOHA
export const KOHA_PROJECT = {
    title: "Pages OPAC de Koha",
    period: "Hiver 2022 (Stage)",
    description: "Lors de mon premier stage chez Solution inLibro, j'ai eu l'opportunité de personnaliser la page OPAC pour le Collège St-Jean Vianney et le Centre Culturel Français de Vancouver. L'OPAC de Koha sert d'interface polyvalente, permettant aux clients d'effectuer facilement diverses tâches, y compris la réservation d'articles et la recherche d'articles spécifiques, parmi d'autres fonctionnalités. Participer à ce projet a été particulièrement agréable pour moi, car cela m'a permis d'indulger ma passion pour le développement web et d'améliorer mes compétences créatives.",
    contributions: [
        "Personnalisé la page OPAC pour le Collège St-Jean Vianney et le Centre Culturel Français de Vancouver."
    ],
    tools: [
        "Langage(s) : JavaScript, CSS",
        "Outil(s) : Git/GitHub, Koha"
    ],
    imgAlt: "opac"
};
