# tailwindcss

> intall
``` bash
npm i tailwindcss
npx tailwindcss init
```

> border

``` html
border-[3px]
border-solid
border-white

```
> width and height
``` html
min-h-[100vh]
min-w-full
h-[40px]
w-[30px]
max-h-[30px]
max-w-[40px]
```

> text
``` html
text-gray-100
text-right
text-center
```
> background

``` html
bg-black
```
> divider

> media

> spacing

> screen

> font
> 动画

``` html
animate-spin
animate-ping
animate-pluse
animate-bounce

```
> tailwind.config.js

``` js
module.exports = {
  content: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  theme: {
    extend: {
      backgroundImage: {
        logo: "url('@/assets/img/logo.png')",
        question: "url('@/assets/img/question/question-bg.svg')",
        level: "url('@/assets/img/level.png')",
      },
    },
    fontWeight: {
      100: 100,
      200: 200,
      300: 300,
      400: 400,
      500: 500,
      600: 600,
      700: 700,
      800: 800,
      900: 900,
    },
    textColor: (theme) => ({
      ...theme("colors"),
      white: "#ffffff",
      brown: "#531D00",
      gold: "#FFC158",
      deepGold: "#CE8C03",
      deepBlue: "#00326E",
      lightPurple: "#FAE8FF",
      deepPurple: "#490F74",
      gray: "#C8C4BF",
      grayArrow: "#979797",
      grayArrowH: "#EAEAEA",
      orange: "#FA5309",
      green: "#0ED32C",
      greenOne: "#5A951D",
      blue: "#346DF3",
      blue1: "#009BFF",
      purple: "#9038C2",
      lightYellow: "#FFEC00",
      lightYellow1: "#F8CA5A",
    }),
    backgroundColor: (theme) => ({
      ...theme("colors"),
      btnBgColor: "#33322C",
      lightYellow: "#FFC259",
      lightYellow1: "#FFFCD7",
      lightYellow2: "#FDF298",
      lightYellow3: "#FFFBEE",
      lightYellow4: "#F8CA5A",
      deepGray: "#B8B1AA",
      deepGray1: "#C7CCD6",
      lightBlue: "#E4EAEE",
      lightBlue1: "#E0F8FF",
      lightBlue2: "#F2F5F9",
      green: "#0ED32C",
      orange: "#FA5309",
      brown: "#C96D46",
      referralColor: "#C8D5DE",
      lightGray: "#F8FAFC",
      lightGray1: "#C8C4BF",
      lightRed: "#FEF4DE",
      lightGreen: "#E5FFED",
    }),
  },
  plugins: [],
  // Base css setting
  corePlugins: {
    preflight: false,
  },
};
```

> space-x & space-y

``` css
.space-x-\[4px\]>:not([hidden])~:not([hidden]) {
	margin-left: 4px;
}	

.space-y-\[4px\]>:not([hidden])~:not([hidden]) {
	margin-top: 4px;
}
```
