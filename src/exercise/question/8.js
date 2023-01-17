/** create type for node */

const node = {
  name: "node1",
  links: [
    {
      name: "node1.1",
      links: [
        { name: "node1.1.1" },
        { name: "node1.1.2" },
        { name: "node1.1.3" },
      ],
    },
    {
      name: "node1.2",
    },
    {
      name: "node1.3",
      links: [{ name: "node1.3.1" }],
    },
  ],
};
