CREATE TABLE "users" (
  "id" bigserial PRIMARY KEY,
  "email" varchar UNIQUE NOT NULL,
  "created_at" timestamptz NOT NULL DEFAULT (now())
);

CREATE TABLE "pizzas" (
  "id" bigserial PRIMARY KEY,
  "user_id" bigint NOT NULL,
  "name" varchar NOT NULL,
  "toppings" text[],
  "created_at" timestamptz NOT NULL DEFAULT (now())
);

CREATE INDEX ON "users" ("email");

CREATE INDEX ON "pizzas" ("user_id");

ALTER TABLE "pizzas" ADD FOREIGN KEY ("user_id") REFERENCES "users" ("id");

