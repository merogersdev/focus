# Focus App

![Focus App Screenshot](https://my-portfolio-screens.s3.ca-central-1.amazonaws.com/focus/focus-screenshot-lg.png)

## Summary

This web app features a customizable Pomodoro focus timer where you can set focus time, short and long break times, light and dark mode, auto-pause between pomodoros and notification sounds. Demo deployed Google Cloud Run with Cloud Build CI/CD Pipeline.

## Core Features

- Customizable Pomodoro Timer
- Light and dark modes
- Auto-pause
- Platform-agnostic deployment via Docker
- Full CI/CD Pipeline with Google Cloud Build

## Scripts

- Development Server: `npm run dev`
- Build for Production: `npm run build`

## Development

Clone repo to your computer and run `npm run install` to install any dependencies. Fork repository if you want to make changes and use the CI/CD pipeline.

## Deployment

### A. Custom Deployment via Docker Image

1. Build cloud image with `docker build -t focus .`
2. Push to your favourite docker repository eg. hub.docker.com, AWS Elactic Container Registry or Google Artifact Registry eg. `docker push focus-image.repo.com`
3. Deploy app eg. `docker run -d -p 3000:3000 --restart=unless-stopped --name=focus-app focus-image.repo.com:latest`

### B. CI/CD Deployment via Google Cloud Build

1. Setup Artifact Registry repository in Google Cloud under your desired project.

- Type: Docker
- Region: Select one that is compatible with your project with Cloud Build/Cloud Run eg. us-central1, us-west2...etc.
- Everything else can be set as default

2. Confiure Cloud Run by going into settings in Cloud Run and enable permissions for Cloud Run, Service Accounts, and Cloud Build.
3. Create Cloud Build Trigger

- Region: Same as the one you used for Artifact Registry
- Source: Select Second generation, and repository can be either one from Google Cloud Source or external source eg. Github (may need to authenticate by following the instructions by following the 'LINK REPOSITORY' link under the repository drop-down).

4. Branch: will match your 'main' branch by default.
5. Under Advanced -> Substitution variables, set the following:

- "\_IMAGE" : example (what you want the name of your app to be)
- "\_LOCATION" : eg. us-central1 (your GCP Region)
- "\_REPOSITORY" : eg. focus (your Artifact Repository)

6. Set service account to the default supplied from the drop-down or any custom service account the required permissions. Save.
7. Perform a dry run on the trigger by running RUN -> RUN TRIGGER
8. Test deployment bya pushing into the main branch of your forked repository.

## Tags

![Next JS](https://img.shields.io/badge/Next-black?style=for-the-badge&logo=next.js&logoColor=white)
![TypeScript](https://img.shields.io/badge/typescript-%23007ACC.svg?style=for-the-badge&logo=typescript&logoColor=white)
![TailwindCSS](https://img.shields.io/badge/tailwindcss-%2338B2AC.svg?style=for-the-badge&logo=tailwind-css&logoColor=white)
![Redux](https://img.shields.io/badge/redux-%23593d88.svg?style=for-the-badge&logo=redux&logoColor=white)
![Docker](https://img.shields.io/badge/docker-%230db7ed.svg?style=for-the-badge&logo=docker&logoColor=white)
![Jest](https://img.shields.io/badge/-jest-%23C21325?style=for-the-badge&logo=jest&logoColor=white)
![Google Cloud](https://img.shields.io/badge/GoogleCloud-%234285F4.svg?style=for-the-badge&logo=google-cloud&logoColor=white)
