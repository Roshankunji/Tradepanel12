export const commaSeparators = (num) => {
      const numParts = num.toString().split('.');
      numParts[0] = numParts[0].replace(/\B(?=(\d{3})+(?!\d))/g, ',');
      return numParts.join('.');
};

export const parseToFloat = (num1, num2) => {
      const temp1 = Number(num1);
      const temp2 = Number(num2);
      const res = (temp1 * temp2).toLocaleString();
      return res;
}