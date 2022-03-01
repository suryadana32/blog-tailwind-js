export default {
    name: 'comment',
    title: 'Comment',
    type: 'document',
    fields: [
      {
        name: 'name',
        type: 'string',
      },
      {
        title: 'Approved',
        name: 'approved',
        type: 'boolean',
        description: 'Comments wont show',
      },
      {
        name: 'email',
        title: 'Email',
        type: 'string',
      },
      {
          name: "comment",
          type: "string",
      },
      {
        name: 'post',
        type: 'reference',
        to: [{ type: "post"}],
      },
    ],
  };
  