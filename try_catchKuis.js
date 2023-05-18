class ValidationError extends Error {
  constructor(message) {
    super(message);
    this.name = "ValidationError";
    }
  }
// TODO 2
function validateNumberInput(a,b,c) {
  if (typeof(a) !==`number`) {
    throw new ValidationError ("Argumen pertama harus number") 
    }else if (typeof(b) !==`number`) {
      throw new ValidationError ("Argumen kedua harus number") 
      }else if (typeof(c) !==`number`) {
        throw new ValidationError ("Argumen ketiga harus number") 
        }
  };

const detectTriangle = (a, b, c) => {
  // TODO 3

try{
  validateNumberInput (a,b,c);
  if (a === b && b === c) {
    return 'Segitiga sama sisi';
  }

  if (a === b || a === c || b === c) {
    return 'Segitiga sama kaki';
  }

  return 'Segitiga sembarang';
  }catch(error) {
    return error.message;
    }
};
console.log(detectTriangle('a', 1, 2));