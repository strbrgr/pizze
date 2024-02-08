-- name: CreatePizza :one
INSERT INTO pizzas (
  user_id, name, toppings
) VALUES (
  $1, $2, $3
)
RETURNING *;

-- name: GetPizza :one
SELECT * FROM pizzas
WHERE id = $1 LIMIT 1;

-- name: ListPizzas :many
SELECT * FROM pizzas
WHERE user_id = $1
ORDER BY id
LIMIT $2
OFFSET $3;

