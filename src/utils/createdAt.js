export const daysAgo = (createdAt) => {
  const createdAtDate = new Date(createdAt);
  const currentDate = new Date();
  const timeDiff = currentDate - createdAtDate;
  const daysAgo = Math.floor(timeDiff / (1000 * 60 * 60 * 24));
  return daysAgo === 0 ? "Today" : `${daysAgo} days ago`;
};
