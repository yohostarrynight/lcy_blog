const categoryFilter = num => {
  switch (num) {
    case 0:
      return '前端';
    case 1:
      return '后端';
    case 2:
      return '生活';
    default:
      return '其他';
  }
};

export { categoryFilter };
