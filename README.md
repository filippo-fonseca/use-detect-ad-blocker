# `useDetectAdBlocker`

🎙 A simple React hook for detecting the use of an Ad Blocker by the user.

Built with TypeScript (built-in type safety and support).

## Installation

```bash
npm i use-detect-ad-blocker
# or
yarn add use-detect-ad-blocker
```

## Usage

The following is an example of how you might choose to use this hook:

```tsx
import { useDetectAdBlocker } from "use-detect-ad-blocker";

const Component = () => {
    const detectAdBlocker = useDetectAdBlocker();

    return {detect ? <Modal /> : <HomePage />}
}
```

Created and maintained with ❤️ by [**@FilippoFonseca**](https://twitter.com/FilippoFonseca).
