package com.se182393.shopgamemanagement.controller;

import com.se182393.shopgamemanagement.model.Game;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;

import java.util.Arrays;
import java.util.List;

@Controller
public class ShopController {

    @GetMapping("/")
    public String home(Model model) {
        List<Game> featuredGames = getFeaturedGames();
        model.addAttribute("featuredGames", featuredGames);
        return "shop/home";
    }

    @GetMapping("/store")
    public String store(Model model) {
        List<Game> allGames = getAllGames();
        model.addAttribute("games", allGames);
        return "shop/store";
    }

    @GetMapping("/game/{id}")
    public String gameDetails(@PathVariable Long id, Model model) {
        // For now, we'll return a placeholder game
        // In a real application, we would fetch the game by id from a repository
        Game game = getFeaturedGames().stream()
                .filter(g -> g.getId().equals(id))
                .findFirst()
                .orElse(getFeaturedGames().get(0));
        model.addAttribute("game", game);
        return "shop/game-details";
    }

    private List<Game> getFeaturedGames() {
        // Placeholder data until we have a database
        return Arrays.asList(
            new Game(1L, "OutLast", "A survival horror game", 39.99, "ready_or_not.jpg", "Horror, Survival, Adventure"),
            new Game(2L, "R.E.P.O", "A sci-fi action game", 59.99, "rise_of_ronin.jpg", "Sci-Fi, Action, Adventure"),
            new Game(3L, "Stalker 2", "Post-apocalyptic survival game", 49.99, "stalker2.jpg", "Survival, FPS, Open World")
        );
    }

    private List<Game> getAllGames() {
        // For now, we'll use the same list
        return getFeaturedGames();
    }
} 