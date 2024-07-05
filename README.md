# share_prompts

*This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).*

This is a tutorial project that serves as a platform for sharing and viewing AI prompts. 

## Table of Contents
- [Features](#features)
- [Getting Started](#getting-started)
- [Prerequisites](#prerequisites)
- [Installation](#installation)
- [Running the Project](#running-the-project)
- [Folder Structure](#folder-structure)


## Features
### Profile
- Log in using an existing Google Account
- Dedicated profile page for self and other users showing prompts by user

### Prompts
- Create, edit, and delete prompts
- View all prompts in the database
- Searching prompts
  - by username
  - by tag
  - by keywords appearing in prompts


## Getting Started
To get a local copy up and running follow these simple steps.

### Prerequisites
- Node.js (>=21.0.0)
- npm (>=10.2.0)

### Installation
1. Clone the repo:
   ```sh
   $ git clone https://github.com/yourusername/your-repo-name.git
   ```
2. Install dependencies:
  ```sh
  $ cd your-repo-name
  $ npm install
  ```
### Running the Project
1. Start project locally in your directory
  ```sh
  $ npm run dev
  ```

2. Open `http://localhost:3000` with your browser to see the result.

## Folder Structure
share_prompts/        
├── README.md    
├── .gitignore    
├── app              # API endpoints and routes    
│   ├── api            
│   ├── create-prompt     
│   ├── layout.jsx    
│   ├── page.jsx    
│   ├── profile    
│   └── update-prompt    
├── components       # Reusable components     
├── jsconfig.json    
├── models           # MongoDB Data models    
├── next.config.mjs    
├── package-lock.json    
├── package.json    
├── postcss.config.mjs    
├── public    
├── styles           # CSS stylesheet    
├── tailwind.config.js    
└── utils            # Utility functions

