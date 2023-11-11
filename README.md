# Focus App

![Focus App Screenshot](https://my-portfolio-screens.s3.ca-central-1.amazonaws.com/focus/focus-screenshot-lg.png)

## Quick Summary

This web app features a customizable Pomodoro focus timer where you can set focus time, short and long break times, light and dark mode, auto-pause between pomodoros and notification sounds. Demo deployed to AWS.

## Goal

Learn Next.js by creating a web-based pomodoro timer that can be used on a daily basis to improve productivity and not bog the user down with unnecessary fluff.

## Core Features

- Customizable Pomodoro Timer
- Light and dark modes
- Auto-pause
- Platform-agnostic deployment via Docker

## Tech Stack

- Next.js 13
- Typescript
- TailwindCSS
- Redux Toolkit
- Docker

## Scripts

To run the development server, use

> npm run dev

To build for production, use

> npm run build

## Deployment

1. Build Image
   > docker build . -t focus
2. Run Image
   > docker run --name focus -d -p 3000:3000 focus

## Tags

![Next JS](https://img.shields.io/badge/Next-black?style=for-the-badge&logo=next.js&logoColor=white)
![TypeScript](https://img.shields.io/badge/typescript-%23007ACC.svg?style=for-the-badge&logo=typescript&logoColor=white)
![TailwindCSS](https://img.shields.io/badge/tailwindcss-%2338B2AC.svg?style=for-the-badge&logo=tailwind-css&logoColor=white)
![Redux](https://img.shields.io/badge/redux-%23593d88.svg?style=for-the-badge&logo=redux&logoColor=white)
![Docker](https://img.shields.io/badge/docker-%230db7ed.svg?style=for-the-badge&logo=docker&logoColor=white)
![AWS](https://img.shields.io/badge/AWS-%23FF9900.svg?style=for-the-badge&logo=amazon-aws&logoColor=white)
