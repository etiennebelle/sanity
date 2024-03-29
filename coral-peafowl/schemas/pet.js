// schemas/pet.js
export default {
  name: 'pet',
  type: 'document',
  title: 'Pet',
  fields: [
    {
      name: 'name',
      type: 'string',
      title: 'Name',
    },
    {
      name: 'age',
      type: 'number',
      title: 'Age',
    },
    {
      name: 'description',
      type: 'text',
      title: 'Description',
    },
  ],
}
