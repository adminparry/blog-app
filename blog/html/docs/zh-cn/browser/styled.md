# styled-component

https://styled-components.com/


> basic

``` js
import styled from 'styled-component';

const Span = styled('span')`
    color: red;
`

render(
    <Span>hello world</Span>
)
```

> animation

``` js
import styled, { keyframes } from 'styled-component';

const rotate = keyframes`
    from {
        transform: rotate(0deg)
    }
    to {
        transform: totate(369deg)
    }
`;
const Rotate = styled.div`
  display: inline-block;
  animation: ${rotate} 2s linear infinite;
  padding: 2rem 1rem;
  font-size: 1.2rem;
`;

render(
  <Rotate>&lt; 💅🏾 &gt;</Rotate>
);
```

> extends

``` js

import styled from 'styled-component';

const Input = styled.input.attrs(props => {
    type: 'text' 
})

const InputColor = styled(Input)(({color}) => ({
    color: color
}))
```

> attrs

``` js
import styled from 'styled-component';

const Input = styled.input.attrs(props => {
    type: 'text' 
})


```