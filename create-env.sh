if [ ! -z "$DATABASE_URL" ]
then
  echo DATABASE_URL=$DATABASE_URL > .env
fi