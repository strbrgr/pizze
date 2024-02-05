package main

import (
	"net/http"

	"github.com/gin-contrib/cors"
	"github.com/gin-gonic/gin"
)

type pizza struct {
	ID       string   `json:"id"`
	Title    string   `json:"title"`
	Sauce    string   `json:"sauce"`
	Toppings []string `json:"toppings"`
}

var pizzas = []pizza{
	{ID: "1", Title: "Margherita", Sauce: "Tomato", Toppings: []string{"Cheese", "Basil"}},
	{ID: "2", Title: "Pepperoni", Sauce: "Tomato", Toppings: []string{"Cheese", "Pepperoni"}},
	{ID: "3", Title: "Vegetarian", Sauce: "Pesto", Toppings: []string{"Cheese", "Tomato", "Mushrooms", "Bell Peppers"}},
}

func getPizzas(c *gin.Context) {
	c.IndentedJSON(http.StatusOK, pizzas)
	return
}

func getPizzaByID(c *gin.Context) {
	id := c.Param("id")

	for _, p := range pizzas {
		if p.ID == id {
			c.IndentedJSON(http.StatusOK, p)
			return
		}
	}

	c.IndentedJSON(http.StatusNotFound, gin.H{"message": "pizza not found"})
}

func postPizza(c *gin.Context) {
	var newPizza pizza

	if err := c.BindJSON(&newPizza); err != nil {
		return
	}

	pizzas = append(pizzas, newPizza)
	c.IndentedJSON(http.StatusCreated, newPizza)
}

func main() {
	router := gin.Default()
	config := cors.DefaultConfig()
	config.AllowOrigins = []string{"http://localhost:5173"}
	config.AllowMethods = []string{"GET", "POST", "PUT", "DELETE", "OPTIONS"}

	router.Use(cors.New(config))
	router.GET("/api/v1/pizzas", getPizzas)
	router.GET("/api/v1/pizzas:id", getPizzaByID)
	router.POST("/api/v1/pizzas", postPizza)
	router.Run("localhost:8080")
}
