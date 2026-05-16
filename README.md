# Sudoku Duel MVC

Це стартова структура семестрового проєкту **Sudoku Duel**: онлайн-змагання двох гравців у розв'язанні однакового судоку.

## Стек

- Vite
- TypeScript
- Firebase Realtime Database
- GitHub Pages
- MVC-поділ: Models, Views, Controllers, Services

## Як запустити

```bash
npm install
npm run dev
```

## Firebase

У файлі `src/config/firebaseConfig.ts` потрібно вставити конфігурацію свого Firebase-проєкту.

```ts
export const firebaseConfig = {
  apiKey: "...",
  authDomain: "...",
  databaseURL: "...",
  projectId: "...",
  storageBucket: "...",
  messagingSenderId: "...",
  appId: "..."
};
```

Після цього можна створювати кімнати та тестувати синхронізацію в двох вкладках або на двох різних пристроях.

## Що вже закладено

- структура MVC;
- моделі кімнати, гравця, судоку, абілок і результатів;
- сервіси для Firebase, кімнат, судоку, балів, таймера, регіонів і абілок;
- базові екрани Home, Lobby, Game, Result;
- hash-router для сумісності з GitHub Pages;
- конфігурація складності та шансів абілок;
- стартовий набір судоку.

## Далі треба доробити

- повну інтеграцію GameController з Firebase;
- красиву візуалізацію ефектів абілок;
- фінальне оформлення адаптивного дизайну;
- заповнити більше судоку в `src/data/puzzles.ts`.
