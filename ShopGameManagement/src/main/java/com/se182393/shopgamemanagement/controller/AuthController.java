package com.se182393.shopgamemanagement.controller;

import com.se182393.shopgamemanagement.dto.request.AccountLoginRequest;
import com.se182393.shopgamemanagement.dto.request.AccountRegisterRequest;
import com.se182393.shopgamemanagement.dto.response.AccountSessionResponse;
import com.se182393.shopgamemanagement.service.AccountService;
import jakarta.servlet.http.HttpSession;
import jakarta.validation.Valid;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.validation.BindingResult;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.ModelAttribute;
import org.springframework.web.bind.annotation.PostMapping;

import java.util.List;

@Controller
public class AuthController {
    @Autowired
    private AccountService accountService;

    @GetMapping("/login")
    public String toLogin() {
        return "auth/login";
    }
    @PostMapping("/login-handle")
    public String handleLogin(@ModelAttribute AccountLoginRequest request, HttpSession session, Model model) {
        AccountSessionResponse sessionResponse = accountService.loginAccout(request);
        if(sessionResponse != null) {
            session.setAttribute("account", sessionResponse);
            return "shop/home";
        }else{
            model.addAttribute("appError", "Invalid username or password");
            return "auth/login";
        }
    }
    @GetMapping("/register")
    public String toRegister(Model model) {
        model.addAttribute("accountForm", new AccountRegisterRequest());
        return "auth/register";
    }
    @PostMapping("/register-handle")
    public String handleRegister
        (@ModelAttribute("accountForm") @Valid AccountRegisterRequest request, BindingResult result, Model model) {
        if(result.hasErrors()) {
            return "auth/register";
        }
        String errors = accountService.createAccount(request);
        if(!errors.isEmpty()) {
            model.addAttribute("appError", errors);
            return "auth/register";
        }
        return "auth/login";
    }
}
