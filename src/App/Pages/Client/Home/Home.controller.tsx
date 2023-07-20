const UseHomeController = () => {
  const cardItems = [
    {
      labelText: "Test",
      children: <span>teste</span>,
    },
    {
      labelText: "Test 2",
      children: <span>teste</span>,
    },
    {
      labelText: "Test 3",
      children: <span>teste</span>,
    },
    {
      labelText: "Test 4",
      children: <span>teste</span>,
    },
    {
      labelText: "Test 5",
      children: <span>teste</span>,
    },
  ];
  return {
    States: {
      cardTest: cardItems,
    },
  };
};

export default UseHomeController;
