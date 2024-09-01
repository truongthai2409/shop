import { useMemo } from 'react';

export const useResponsiveStyles = () => {
  const styles = useMemo(() => {
    return {
      container: 'grid grid-cols-2 w-full 2xl:h-[776px] lg:h-[600px] bg-black mb-20 bg-hero-brand bg-cover bg-no-repeat',
      firstImage: 'absolute lg:top-10 lg:left-[200px] lg:w-[600px] lg:h-[260px] 2xl:top-[51px] 2xl:left-[284px] 2xl:w-[732px] 2xl:h-[309px]',
      secondImage: 'absolute lg:top-[200px] lg:left-[80px] lg:w-[180px] lg:h-[70px] 2xl:top-[223px] 2xl:left-[123px] 2xl:w-[190px] 2xl:h-[80px]',
      paragraph: 'mb-8 capitalize z-50 text-white lg:ml-20 lg:mt-[312px] lg:w-[330px] lg:text-xl 2xl:mt-[369px] 2xl:w-[504px] 2xl:bottom-10 2xl:ml-[123px] 2xl:h-[187px] 2xl:text-3xl 2xl:leading-10',
      button: 'font-semibold bg-white lg:ml-20 lg:p-3 lg:text-xl 2xl:p-5 2xl:text-2xl 2xl:ml-[123px]',
    };
  }, []);

  return styles;
};


// using 

// import React from 'react';
// import useResponsiveStyles from './useResponsiveStyles';

// const AnotherComponent: React.FC = () => {
//   const styles = useResponsiveStyles();

//   return (
//     <div className={styles.container}>
//       {/* Your component content */}
//     </div>
//   );
// };

// export default AnotherComponent;
