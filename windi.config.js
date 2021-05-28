import { defineConfig } from "windicss/helpers"

export default defineConfig({
  attributify: true,
  theme: {
    extend: {
      fontFamily: {
        body: ["Nunito", "sans-serif"],
        display: ["NewYork", "serif"],
      },
      fontSize: {
        body: ["1.125rem", "1.625rem"],
        "sub-head": ["1.375rem", "1.875rem"],
        h3: ["1.5625rem", "2.1625rem"],
        h2: ["2.375rem", "2.875rem"],
        h1: ["2.625rem", "3.1250rem"],
      },
      boxShadow: {
        "xy-lg":
          "-5px -5px 10px -5px rgba(0, 0, 0, 0.1), 5px 5px 10px 5px  rgba(0, 0, 0, 0.1)",
        "xy-xl":
          "-10px -10px 50px 10px rgba(0, 0, 0, 0.1),10px 10px 50px 10px rgba(0, 0, 0, 0.1)",
      },
    },
  },
})
