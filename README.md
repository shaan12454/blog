# My Blog (Next.js + Tailwind + MDX)

This is a minimal, ready-to-deploy blog scaffold using Next.js, Tailwind CSS and MDX files.

## Features
- Next.js app
- Tailwind CSS
- MDX posts in `/posts`
- Simple index, post pages, pagination
- RSS feed generator (simple)
- Ready for deployment on Railway (uses `npm run build` and `npm run start`)

## Deploy
1. Create a GitHub repo and push this project.
2. Connect the repo to Railway (Deploy from GitHub).
3. Set any environment variables in Railway (none required for this scaffold).
4. Railway will run `npm run build` and `npm run start -p $PORT`.

## Local dev
```
npm install
npm run dev
```

## Notes
- Customize styles in `styles/globals.css`.
- Add more posts in `/posts` as `.mdx`.
