 export const redColor = 'MediumVioletRed';
 export const blueColor = 'MidnightBlue';
 export const disabledColor = 'gray';


  export function replaceCamelWithSpaces(colorName) {
    return colorName.replace(/\B([A-Z])\B/g, ' $1');
  }
