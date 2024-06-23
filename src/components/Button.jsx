/* eslint-disable react/prop-types */
const Button = ({ style }) => {
  return (
    <button
      type='button'
      className={`py-4 px-6 bg-blue-gradient font-poppins font-medium text-primary text-[18px] outline-none  ${style} rounded-lg`}
    >
      Get started
    </button>
  );
};

export default Button;
