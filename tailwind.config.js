module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    screen: {
      sm: "480px",
      md: "768px",
      lg: "976px",
      xl: "1440px",
    },
    extend: {
      colors: {
        brightRed: "hsl(12, 88%, 59%)",
        orange: "hsl(26, 100%, 55%)",
        paleOrange: "hsl(25, 100%, 94%)",
        veryDarkBlue: "hsl(220, 13%, 13%)",
        darkGrayishBlue: "hsl(219, 9%, 45%)",
        grayishBlue: "hsl(220, 14%, 75%)",
        lightGrayishBlue: "hsl(223, 64%, 98%)",
        white: "hsl(0, 0%, 100%)",
        opaqueBlack: "hsl(0, 0%, 0%)",
      },
      backgroundImage: {
        avatar: "url('/src/components/images/image-avatar.png')",
        product1: "url('/src/components/images/image-product-1.jpg')",
        product2: "url('/src/components/images/image-product-2.jpg')",
        product3: "url('/src/components/images/image-product-3.jpg')",
        product4: "url('/src/components/images/image-product-4.jpg')",
        thumbnail1:
          "url('/src/components/images/image-product-1-thumbnail.jpg')",
        thumbnail2:
          "url('/src/components/images/image-product-2-thumbnail.jpg')",
        thumbnail3:
          "url('/src/components/images/image-product-3-thumbnail.jpg')",
        thumbnail4:
          "url('/src/components/images/image-product-4-thumbnail.jpg')",
      },
      fill: {
        white: "hsl(0, 0%, 100%)",
      },
    },
  },
  plugins: [],
};
