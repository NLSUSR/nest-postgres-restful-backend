export const variables = {
  documentation: {
    title: 'RESTful Backend',
    description: `
    Документация REST API
    
    Технологии:
    Nestjs
    PostgreSQL
    Doker
    `,
    version: '1.0.0',
    tags: {
      authorization: 'Авторизация',
      posts: 'Посты',
      roles: 'Роли',
      users: 'Пользователи',
    },

    operations: {},
  },
  resources: {
    authorization: '/api/authorization',
    users: '/api/users',
    roles: '/api/roles',
    posts: '/api/posts',
  },
  endpoints: {
    create_user: '/create_user',
    get_user: 'get_user/:id',
    get_all_users: '/get_all_users',
    update_user: '/update_user/:id',
    delete_user: '/delete_user/:id',
    add_role: '/add_role',
    block_user: '/block_user',
    create_role: '/create_role',
    get_role: '/get_role/:value',
    get_all_roles: '/get_all_roles',
    update_role: '/update_role/:id',
    delete_role: '/delete_role/:id',
    login: '/login',
    registration: '/registration',
    create_post: '/create_post',
    get_post: '/get_post/:id',
    get_all_posts: '/get_all_posts',
    update_post: '/update_post/:id',
    delete_post: '/delete_post/:id',
  },
  messages: {
    invalidEP: 'Некорректный email или пароль',
    userExist: 'Пользователь с таким email существует',
    userUnauthorized: 'Пользователь не авторизован',
    noAccess: 'Нет доступа',
    writeError: 'Произошла ошибка при записи файла',
  },
};
