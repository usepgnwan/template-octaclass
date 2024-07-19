const { addDynamicIconSelectors } = require('@iconify/tailwind');
   
/** @type {import('tailwindcss').Config} */
module.exports = {
  content:  [
    "*.{html,js}",
     'node_modules/flowbite/**/*.js'
    ],
 
    darkMode : 'class',
      theme: {
        extend: {
          height:{
              "500px" : "500px",
              "400px" : "400px",
              "-520px" : "-520px",
              '-1/2': '-50%',
              "100%" : "100% !important"
          },
          animation: {
              "ping-slow" :  "ping 2s cubic-bezier(0, 0, 0.8, 0.2) infinite",
               "typing": "typing 2s steps(20) infinite alternate, blink 5s infinite"
          },
          keyframes: {
            typing: {
              "0%": {
                width: "0%",
                visibility: "hidden"
              },
              "100%": {
                width: "100%"
              }  
            },
            blink: {
              "50%": {
                borderColor: "transparent"
              },
              "100%": {
                borderColor: "white"
              }  
            }
          },
        }
    },
    plugins: [
      require('flowbite/plugin'),
      addDynamicIconSelectors({
        prefix: 'icon',
      }),
    ],
}

