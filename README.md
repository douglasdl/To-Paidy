# To-Paidy

Create the [Expo](https://docs.expo.dev/bare/overview/) project:
```sh
npx create-expo-app --template bare-minimum
```

Add TypeScript:
- Create the Typescript configuration file:
```sh
touch tsconfig.json
```

- Rename the App.js file to App.tsx:
```sh
mv App.js App.tsx
```

Install the Expo dependencies:
```sh
npx expo install react-native-safe-area-context
npx expo install react-native-screens
npx expo install react-native-svg
npx expo install expo-local-authentication
npx expo install @react-native-async-storage/async-storage
npx expo install jest-expo jest
```

Install the dependencies:
```sh
npm i nativewind
```

Install the development dependencies:
```sh
npm i tailwindcss@3.3.2 -D
npm i prettier-plugin-tailwindcss -D
npm i eslint -D
npm i babel-plugin-module-resolver -D
npm i @types/uuid -D
npm i react-native-svg-transformer -D
npm i @types/jest -D
npm i @testing-library/react-native -D
npm i @testing-library/jest-native -D
npm i jest-transformer-svg -D
```

Create the tailwind.config.js:
```sh
npx tailwindcss init
```

Start the project:
```sh
npx expo start
```

- [Expo LocalAuthentication](https://docs.expo.dev/versions/latest/sdk/local-authentication/)
- [React Native Testing Library](https://callstack.github.io/react-native-testing-library/)