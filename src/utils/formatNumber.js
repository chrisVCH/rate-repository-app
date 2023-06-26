const formatNumber = (n) => {
  if (n < 1000) return n;
  if (n > 1000) return (n / 1000).toFixed(1) + 'K';
};

export default formatNumber;