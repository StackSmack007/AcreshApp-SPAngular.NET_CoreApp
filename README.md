About the author:
Nikolay Hristov

Email: niki.hristov007@gmail.com

Skype: niksana3

About the project and GDPR:
This web app is online platform for sharing cooking recipes. It is developed for educational non commersial purposes.

Due to the educational purpose of this app GDPR is not implemented at the current state.

Main functionality of ACRESH:
1. User Roles and permissions:
1.1.Guest: (non logged in user)

Guest can:
+ Visit and explore all recipes, ingredients and categories (both as listings and details).
+ Search for products by name (case insensitive 2 letters match).
+ See all rankings of recipes
+ See who publicly available user info
+ View recipe details and it's comments.
+ View About (this page) info.

1.2. User: (logged in user)

User Credentials:
UserName: [User1] [User2] [User3] [User4] [User5] [User6] [User7] [User8] [User9]
Password: [123456a]
User have all the privileges of guest.
User can:
+ "Message other users" and recieve messages from them.
When user write a message if reciever is on he gets instant notification by.
getting a increased number of unread messages, this applies for all of reciever devices
where he is logged on. If user reads a message by choosing to display it, number of unread messages
is updated on all of his devices. Reciever of message can choose to delete message without reading it.
+ Rate Recipes. User can rate product recipe which he can change his rating but not remain neutral any more.
+ Write comments to recipes.
User can not write comment if the last written comment is his own.
+ Edit his own comments to recipes.
+ Give attitude to comments of recipes (Like or Dislike). User can give only 1 attitude point per comment if he likes comment he can dislike it but he can no longer stay neutral
User can like/unlike his own comment. Recipe detais get updated instantly for current viewers of this recipe, this applies for comments also.
+ Can enlist recipes to his favourite list.
+ Can view his own recipes and other users recipes.
+ Can add recipes.
+ Can add ingredients.
+ Can add categories.
+ Can delete categories.
+ Can delete ingredients (if not unused by recipe and he is author).
+ Can delete categories (if no recipe in them and he is author).
+ Can edit categories,ingredients and recipes if they are created by him.
+ Can block other users, preventing them for further messaging him, this is reversable.
+ Can see users who he blocks or users who are blocked by him.

1.3. Admin: (logged in admin)

Assistant Credentials:
UserName: [Admin1]
Password: [123456a]
Admin have all the privileges of User.
Admin can:
+ Can Edit all recipes, ingredients, categories as if he is their author.

2. About implementation key aspects:
2.1. Ingredients page

Component managing ingredients uses 3 sub components one of them is navigated by sub-routing.
Ingredients page manages all CRUD for ingredients, Ingredients are devided on two groops Primal and Additional.

2.2. Category page

Categories can be nested. Every recipe can be present in one category.
Category component uses 2 sub components to manage CRUD for components,
First sub Component represents expandable tree that represents tree nesting of components and provides navigation.
Second sub Component is for CRUD operations, both components change based on actions in the other.
For example First provides navigation for Select, Delete, Edit and Create based on user credentials
Second component if intracted results to update of tree structure in the First.

2.3. Cauldron page

Cauldron provides filtering of recipes based on selected ingredients.

2.4. Instant notifications of messaging and recipe edits

This is achieved by usage of SignalR comunication via WebSockets

2.5. Infinite scroll and spinner

For portioning request for arrays of elements from API infinite scroll is implemented
by attaching eventlistener on scroll, if await of response loading notification is displayed

2.6. Material dialog implementation

For deletion confirmations pop up is shown asking for confirmation of deletion

3. Structure and code:
3.1. Overall

Project follows SPA architecture. It is service based in both Front and Back Ends.
Back end is developed via C# .NET Core 3.1.
For managing users JWT is implemented.