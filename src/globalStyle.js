import { injectGlobal } from 'vue-styled-components'

export default injectGlobal`
   /*------------------------------------*\
    # Fonts
  \*------------------------------------*/
    @import url('https://fonts.googleapis.com/css?family=Source+Sans+Pro:400,600&display=swap');
  /*------------------------------------*\
    # Global
  \*------------------------------------*/
    html {
      box-sizing: border-box;
      height: 100%;
    }
    *, *:before, *:after {
      box-sizing: inherit;
    }
    body {
      height: 100%;
      min-height: 100%;
      font-family: 'Source Sans Pro', -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Droid Sans', 'Helvetica Neue', sans-serif;
      font-size: 16px;
      font-weight: 400;
      color: #575756;
    }
    h1, h2, h3, h4, h5 {
      font-weight: normal;
      line-height: normal;
      color: #2B486D;
      margin: 0;
    }
    ul {
      list-style-type: none;
      padding: 0;
    }
    li {
      display: inline-block;
      margin: 0 10px;
    }
    a {
      color: #42b983;
    }
`
