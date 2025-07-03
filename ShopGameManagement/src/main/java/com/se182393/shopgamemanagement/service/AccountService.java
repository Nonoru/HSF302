package com.se182393.shopgamemanagement.service;

import com.se182393.shopgamemanagement.dto.request.AccountLoginRequest;
import com.se182393.shopgamemanagement.dto.request.AccountRegisterRequest;
import com.se182393.shopgamemanagement.dto.response.AccountSessionResponse;
import com.se182393.shopgamemanagement.enums.RoleEnum;
import com.se182393.shopgamemanagement.model.Account;
import com.se182393.shopgamemanagement.repository.AccountRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;

@Service
public class AccountService {
    @Autowired
    private AccountRepository accountRepo;

    public String createAccount(AccountRegisterRequest account) {
        if(account.getPassword().equals(account.getConfirmPassword())) {
            Account acc = Account.builder()
                    .username(account.getUsername())
                    .password(account.getPassword())
                    .role(RoleEnum.CUSTOMER_ROLE.getRoleName())
                    .build();
            accountRepo.save(acc);
            return "";
        }
        return "Confirm password does not match";
    }

    public AccountSessionResponse loginAccout(AccountLoginRequest request) {
        Account acc = accountRepo.getAccountByUsername(request.getUsername()).orElse(null);
        if(acc == null) {
            return null;
        }
        if(acc.getPassword().equals(request.getPassword())) {
            return AccountSessionResponse.builder()
                    .username(acc.getUsername())
                    .username(acc.getUsername())
                    .role(acc.getRole())
                    .build();
        }else{
            return null;
        }
    }
}
