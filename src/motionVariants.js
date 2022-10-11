export const containerVariants = {
    hidden: { y: "-100vh" },
    visible: {
      y: 0,
      transition: {
        delay: 0.5,
        when: "beforeChildren",
      },
    },
    hover: {
      scale: 1.2,
    },
  };
  
 export const buttonVariants = {
    hidden: {
      y: 20,
    },
    visible: {
      y: 0,
      transition: {
        yoyo: Infinity,
      },
    },
    hover: {
      textDecoration:'none',
      backgroundColor:"#1a355d",
      scale: 1.1,
      transition: {
        yoyo: 10,
      },
    },
  };
  
 export const linkVariants = {
    hover: {
      textDecoration:'none',
      scale: 1.2,
      color: "#dd6b20",
      transition: {
        delay: 0.5,
      },
    },
  };

 export const headerVariant = {
    hidden: {
      x: "-100vw",
    },
    visible: {
      x: "0",
      transition: {
        delay: 0.5,
      },
    },
  };

 export const bodyVariant = {
    hidden: {
      opacity: 0,
    },
    visible: {
      opacity: 1,
      transition: {
        delay: 1,
      },
    },
  };
