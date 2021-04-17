### Loading Awesomly

Loading Awesomly is a fun project where you can get a list of short messages to show to your user when the screen is loading. This way, the boring
loading spinner gets replaced with a positive fun thought for the user. The messages are picked randomly by the package itself.

Contributions are welcome :)

The messages has to be:

1. Short and sweet
2. Upbeat
3. No profanity

#### How to use?

Install the package in your project

```
yarn add loading-awesomly
```

or

```
npm install loading-awesomly
```

In you loading indicator, add the imported message

```
import { loadingAwesomly } from 'loading-awesomly';

//use it where you want to show it
<div>{loadingAwesomly}</div>
```
