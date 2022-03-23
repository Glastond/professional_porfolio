export default {
  name: "experiences",
  title: "Experiences",
  type: "document",
  fields: [
    {
      name: "yearFrom",
      title: "From",
      type: "string",
    },
    {
      name: "yearTo",
      title: "From",
      type: "string",
    },
    {
      name: "works",
      title: "Works",
      type: "array",
      of: [{ type: "workExperience" }],
    },
  ],
};
