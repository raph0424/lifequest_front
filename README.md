# 📱 LifeQuest - Frontend (React Native + Expo)

**LifeQuest** est une application mobile de gestion de tâches gamifiée façon MMORPG. Chaque action quotidienne devient une quête qui fait évoluer votre avatar, débloque des cosmétiques, et aménage votre room virtuelle.

## 🚀 Stack principale

- [React Native](https://reactnative.dev/)
- [Expo](https://expo.dev/)
- [NativeWind](https://www.nativewind.dev/) (Tailwind pour React Native)
- [React Navigation](https://reactnavigation.org/)
- [Three.js](https://threejs.org/) (à venir, via `react-three-fiber`)

---

## 📦 Installation

   git clone https://github.com/toncompte/lifequest-frontend.git
   cd lifequest-frontend
   
Installer les dépendances :

npm install

Lancer le projet avec Expo :

npx expo start
🔧 Si tu utilises bun, tu peux aussi faire :
bun install
bunx expo start


🛠️ Commandes principales
| Action                      | Commande                     |
| --------------------------- | ---------------------------- |
| Démarrer l'app              | `npx expo start`             |
| Lancer sur Android Emulator | `npx expo run:android`       |
| Lancer sur iOS Simulator    | `npx expo run:ios`           |
| Lancer le build web (test)  | `npx expo start --web`       |
| Nettoyer le cache           | `npx expo start -c`          |
| Ajouter une police (expo)   | `npx expo install expo-font` |


📁 Structure rapide

/assets           → images, polices, bg
/components       → composants UI globaux (BGWrapper, Avatar, etc.)
/navigation       → TabNavigator (navigation principale)
/screens          → Accueil, Quêtes, Room, etc.
App.tsx           → racine de l'application
babel.config.js   → configuration pour NativeWind
