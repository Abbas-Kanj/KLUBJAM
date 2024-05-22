<img src="./readme/title1.svg"/>

<br><br>

<!-- project philosophy -->
<img src="./readme/title2.svg"/>

> KLUBJAM revolutionizes music collaboration and discovery. It offers a workspace for project collaboration, a community feed for interaction, a music feed for playlist browsing, and AI-generated sound capabilities.

### User Stories

#### Musician

- As a musician, I want to be able to produce music alone or collaborate with other musicians on a song project, so that I can create high-quality music and expand my creative opportunities.
- As a musician, I want to be able to post my latest work on the feed, so that musicians can interact with me, provide feedback, and stay updated on my musical endeavors.
- As a musician, I want to be able to use AI to generate my own music by inputting text and specifying my favorite artist, so that I can create unique and personalized music tracks.
  <br>

#### Admin

- As an admin, I want to view analytics of the entire website, including user activity and engagement metrics, so that I can make informed decisions to improve the platform.
- As an admin, I want to be able to manage user accounts, including creating, editing, updating, suspending, banning, or deleting musician and moderator accounts, to maintain a safe and respectful community.
- As an admin, I want to have the ability to moderate content by updating or deleting tracks uploaded by musicians and posts made by users, to ensure the quality and appropriateness of the platform's content.
  <br>

#### Moderator

- As a moderator, I want to be able to approve or reject produced tracks by musicians, so that I can ensure that only high-quality music is showcased on the platform.
- As a moderator, I want to be able to edit or delete comments made by musicians on a certain post, to maintain a respectful and constructive environment.
- As a moderator, I want to be able to report any issues or violations to the admin, so that they can take appropriate action to address them and maintain the integrity of the platform.

<br><br>

<!-- Tech stack -->
<img src="./readme/title3.svg"/>

### KLUBJAM is built using the following technologies:

- This project uses the [React development framework](https://react.dev/), a popular JavaScript library for building user interfaces. React allows for the creation of reusable UI components, ensuring a dynamic and responsive user experience.
- The project leverages [Redux](https://redux.js.org/), a state management, providing a predictable state container. This ensures efficient data flow throughout the application.
- The project uses [NestJS](https://nestjs.com/), a progressive Node.js framework for building scalable and maintainable server-side applications. NestJS leverages TypeScript, enhancing code quality and maintainability with strong typing and modern JavaScript features.
- The project leverages [Tone.js](https://tonejs.github.io/), a powerful JavaScript framework for creating and manipulating audio in the web browser, enabling dynamic and interactive sound experiences.
- The project leverages [TailwindCSS](https://tailwindcss.com/), a utility-first CSS framework that allows for rapid UI development with a consistent design. Additionally, a custom mini library was created for reusable components like buttons and inputs, designed from scratch to match the project's unique aesthetic.
  <br><br>

<!-- UI UX -->
<img src="./readme/title4.svg"/>

> We designed KLUBJAM using wireframes and mockups, iterating on the design until we reached the ideal layout for easy navigation and a seamless user experience.

- Project Figma design [figma](https://www.figma.com/design/AdFpHZHqfDga3fu1TE4QB2/KLUBJAM?node-id=0-1&t=MsWQ7YJPFsrEGOuV-0)

### Mockups

| Home screen                                  | Explore Screen                             |
| -------------------------------------------- | ------------------------------------------ |
| ![Landing](./readme/demo/Landing%20Page.png) | ![fsdaf](./readme/demo/Explore%20Page.png) |

<br><br>

<!-- Database Design -->
<img src="./readme/title5.svg"/>

### Architecting Data Excellence: Innovative Database Design Strategies:

<img src="./readme/demo/KLUBJAM-DB.png"/>

<br><br>

<!-- Implementation -->
<img src="./readme/title6.svg"/>

### Musician Screens (Web)

| Landing screen                            | Register Popup                                        |
| ----------------------------------------- | ----------------------------------------------------- |
| ![Landing](./readme/demo/landing.gif)     | ![fsdaf](./readme/demo/register.gif)                  |
| Home screen                               | Explore Screen                                        |
| ![Landing](./readme/demo/login.gif)       | ![Explore](./readme/demo/explore-ezgif.com-speed.gif) |
| Workspace screen                          | Profile Screen                                        |
| ![Workspace](./readme/demo/workspace.gif) | ![Profile](./readme/demo/profile.gif)                 |

### Admin Screens (Web)

| Admin screen                        |
| ----------------------------------- |
| ![Landing](./readme/demo/admin.gif) |

### Moderator Screens (Web)

| Moderator screen                  |
| --------------------------------- |
| ![Landing](./readme/demo/mod.gif) |

<br><br>

### Videos

<table>
  <tr>
<td align="center">

https://github.com/Abbas-Kanj/KLUBJAM/assets/45877262/814e3251-858a-4e4f-8e89-d3b51c580d2e

</td>
    <td align="center">
      
https://github.com/Abbas-Kanj/KLUBJAM/assets/45877262/2ddcf852-56bb-4bfd-9e81-1712be4f7c6d

</td>
</table>

<!-- AWS Deployment -->
<img src="./readme/title8.svg"/>

### Efficient Deployment: Unleashing the Potential with AWS Integration:

- This project leverages AWS deployment strategies to seamlessly integrate and deploy the backend services. With a focus on scalability, reliability, and performance, we ensure that the backend for KLUBJAM delivers robust and responsive solutions for diverse use cases. By deploying the backend on AWS, KLUBJAM benefits from the comprehensive suite of services and tools that AWS offers, providing a solid foundation for future growth and enhancements.

![Postman Demo](./readme/demo/postman.png)
_A demo of a Postman request to the KLUBJAM backend running on an AWS EC2 instance._

Below were the steps taken to deploy KLUBJAM's backend to AWS, after [connecting to the AWS EC2 instance through PuTTY](https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/putty.html).

- **Step 1**: Update Packages
  ```sh
  sudo apt update
  sudo apt upgrade -y
  ```
- **Step 2**: Install Git, Node.js, and npm
  ````sh
  sudo apt install git -y
  sudo apt install nodejs -y
  sudo apt install npm -y  ```
  ````
- **Step 3**: Clone the Repository
  ```sh
  git clone https://github.com/Abbas-Kanj/KLUBJAM.git
  ```
- **Step 4**: Install Dependencies

  ```sh
  npm install
  ```

- **Step 5**: Install PostgreSQL
  ```sh
  sudo apt install postgresql postgresql-contrib
  sudo systemctl start postgresql
  sudo systemctl enable postgresql
  ```
- **Step 6**: Set Up PostgreSQL
  ```sh
  sudo -i -u postgres
  psql
  CREATE DATABASE klubjam;
  CREATE USER yourusername WITH ENCRYPTED PASSWORD 'yourpassword';
  GRANT ALL PRIVILEGES ON DATABASE klubjam TO yourusername;
  \q
  exit
  ```
- **Step 7**: Create a .env file in the root directory and add the following:

```env
DATABASE_URL="postgresql://yourusername:yourpassword@localhost:5432/klubjam"

```

- **Step 8**: Migrate the Database

```sh
npx prisma migrate deploy

```

- **Step 9**: Set Up Caddy for Reverse Proxy
- install Caddy

```sh
sudo apt install -y debian-keyring debian-archive-keyring apt-transport-https
curl -1sLf 'https://dl.cloudsmith.io/public/caddy/stable/gpg.key' | sudo apt-key add -
curl -1sLf 'https://dl.cloudsmith.io/public/caddy/stable/debian.deb.txt' | sudo tee /etc/apt/sources.list.d/caddy-stable.list
sudo apt update
sudo apt install caddy
```

- Configure Caddy:

```sh
sudo nano /etc/caddy/Caddyfile
```

- Add the following configuration:

```caddy
your-domain.com {
  reverse_proxy localhost:3000
}
```

- Reload Caddy:

```sh
sudo systemctl reload caddy
```

- **Step 10**: Start the NestJS Application

```sh
npm run start:prod
```

Now your KLUBJAM backend should be up and running on your AWS EC2 instance with NestJS, Prisma, PostgreSQL, and Caddy for reverse proxy.

<br><br>

<!-- Unit Testing -->
<img src="./readme/title9.svg"/>

### Precision in Development: Harnessing the Power of Unit Testing:

- This project employs rigorous unit testing methodologies to ensure the reliability and accuracy of code components. By systematically evaluating individual units of the software, we guarantee a robust foundation, identifying and addressing potential issues early in the development process.

<img src="./readme/demo/unitTest.png"/>

<br><br>

<!-- How to run -->
<img src="./readme/title10.svg"/>

> To set up KLUBJAM locally, follow these steps:

### Prerequisites

Before setting up KLUBJAM, ensure you have the following prerequisites installed on your system:

- Node.js and NPM: Ensure you have Node.js and NPM installed. You can download and install them from [nodejs.org](https://nodejs.org/en).
  -NestJS CLI: Install NestJS CLI globally using NPM with the following command:
- npm
  ```sh
  npm install -g @nestjs/cli
  ```
- PostgreSQL: Ensure you have PostgreSQL installed. You can download and install it from [postgresql.org](https://www.postgresql.org/).
- Prisma CLI: Install Prisma CLI globally using NPM with the following command:
- npm
  ```sh
  npm install -g prisma
  ```

### Installation

1. Clone the repository:
   ```sh
   git clone https://github.com/Abbas-Kanj/KLUBJAM.git
   ```
2. Navigate to the project repository:
   ```sh
   cd KLUBJAM
   ```

#### Frontend Setup

1. Navigate to the client directory:
   ```sh
   cd client
   ```
2. Install NPM packages:
   ```sh
   npm install
   ```
3. To run the frontend in development mode:

```sh
 npm run dev
```

#### Backend Setup

1. Navigate to the server directory:
   ```sh
   cd server
   ```
2. Install NPM packages:
   ```sh
   npm install
   ```
3. Copy the example environment variables file `.env.example` and rename it as `.env`, either manually or through this command:
   ```sh
   cp .env.example .env
   ```
4. Fill out the information in `.env` with your configuration details, including the database connection settings. You should also provide the following to ensure full functionality:

- `DATABASE_URL`: Your PostgreSQL connection string.
- `JWT_SECRET`: Your JWT secret key.
  Now, you should be able to run KLUBJAM locally and explore its features.

5. Set up Prisma:

```sh
  prisma migrate dev
  prisma generate
```

6. Run the NestJS server:

```sh
 npm run start:dev
```

Now, the frontend, backend of KLUBJAM are set up. You can run them locally and explore their features.

Feel free to explore and enjoy using KLUBJAM!
