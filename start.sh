test -e .env || ( test -e .env.example && cp .env.example .env )
npm run start